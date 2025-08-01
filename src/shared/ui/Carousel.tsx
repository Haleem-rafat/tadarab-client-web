'use client';

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import * as React from 'react';

import classNames from 'classnames';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/shared/index';
import useMediaQuery from '@/hooks/useMediaQuery';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
  pagination?: boolean;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollTo: (index: number) => void;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  pagination,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<any>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        scrollTo,
        pagination,
      }}>
      <div
        onKeyDownCapture={handleKeyDown}
        className={classNames('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={classNames(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation, pagination } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={classNames(
        'min-w-0 shrink-0 grow-0',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        pagination && 'basis-full',
        !pagination && 'basis-1/2',
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = 'text',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev, pagination } = useCarousel();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (pagination) return null;

  if (isMobile) return null;

  return (
    <div
      className={classNames(
        'from-background absolute top-0 left-0 h-full w-52 bg-gradient-to-r to-transparent',
        {
          hidden: !canScrollPrev,
        }
      )}>
      <Button
        data-slot="carousel-previous"
        variant={variant}
        className={classNames(
          { hidden: !canScrollPrev },
          'absolute !h-14 !w-14 !rounded-full bg-white/10 backdrop-blur-md',
          orientation === 'horizontal'
            ? 'top-1/2 -left-12 -translate-y-1/2'
            : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disable={!canScrollPrev}
        onClick={scrollPrev}
        {...props}>
        <IoIosArrowBack size={24} />
      </Button>
    </div>
  );
}

function CarouselNext({
  className,
  variant = 'text',
  hasMore,
  onLoadMore,
  ...props
}: React.ComponentProps<typeof Button> & {
  hasMore?: boolean;
  onLoadMore?: () => void;
}) {
  const { orientation, scrollNext, canScrollNext, pagination } = useCarousel();

  if (pagination) return null;

  const handleClick = hasMore && onLoadMore ? onLoadMore : scrollNext;

  return (
    <div
      className={classNames(
        'from-background absolute top-0 right-0 h-full w-52 bg-gradient-to-l to-transparent',
        {
          hidden: !canScrollNext,
        }
      )}>
      <Button
        data-slot="carousel-next"
        variant={variant}
        className={classNames(
          { hidden: !canScrollNext },
          'absolute !h-14 !w-14 !rounded-full bg-white/10 backdrop-blur-md',
          orientation === 'horizontal'
            ? 'top-1/2 -right-12 -translate-y-1/2'
            : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        disable={!canScrollNext}
        onClick={handleClick}
        {...props}>
        <IoIosArrowForward size={24} />
      </Button>
    </div>
  );
}

function CarouselPagination() {
  const { api, selectedIndex, scrollTo, pagination } = useCarousel();

  if (!pagination || !api) return null;

  const slidesCount = api.slideNodes().length;

  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <button
          type="button"
          key={index}
          onClick={() => scrollTo(index)}
          className={classNames(
            'h-2 w-20 transition-all duration-300',
            selectedIndex === index ? 'w-20 bg-white' : 'bg-white/30 hover:bg-white/50'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselPagination,
  type CarouselApi,
};
