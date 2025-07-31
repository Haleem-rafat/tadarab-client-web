'use client';

import { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import useSWR from 'swr';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import coursesService from '@/api/services/courses.service';
import { SWR_KEYS } from '@/constants/swrkeys';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  MainCourseCard,
  CourseCardSkeleton,
  CarouselNext,
  MianCategoryChip,
} from '@/shared';
import HeaderCardSection from '@/shared/components/HeaderCardsSection';
import categoriesService from '@/api/services/categories.service';
import { ICategory } from '@/api/types/category.types';

const PER_PAGE = 6;

export default function BestSellerCourses() {
  const [pageIndex, setPageIndex] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const {
    data: swrData,
    isLoading,
    mutate,
  } = useSWR([SWR_KEYS.BEST_SELLER_COURSES, pageIndex, selectedCategoryId], () =>
    coursesService.getAllCourses({
      page: pageIndex,
      per_page: PER_PAGE,
      filters: {
        scope: 'best-seller',
        ...(selectedCategoryId && { topics: selectedCategoryId }),
      },
    })
  );

  const { hasMore, handleLoadMore, dataList } = useInfiniteScroll(
    swrData,
    mutate,
    pageIndex,
    setPageIndex,
    isLoading
  );

  const { data: categoriesData } = useSWR([SWR_KEYS.CATEGORIES], () =>
    categoriesService.getAllCategories().then((data) => data?.data as ICategory[])
  );

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
    setPageIndex(1);
  };

  return (
    <div className="max-w-laptop mx-auto w-full">
      <HeaderCardSection whiteTitle="الدورات" redTitle="الأكثر مبيعاً" textButton="المزيد" />

      <div className="mt-5">
        <Carousel
          className="w-full"
          opts={{
            align: 'end',
            loop: true,
          }}>
          <CarouselContent className="flex items-center">
            {/* Loading skeleton for categories */}
            {!categoriesData &&
              Array.from({ length: 20 }).map((_, index) => (
                <CarouselItem
                  key={`category-skeleton-${index}`}
                  className="md:basis-1/2 lg:basis-auto">
                  <div className="h-12 w-24 animate-pulse rounded-xl bg-gray-700" />
                </CarouselItem>
              ))}

            {categoriesData &&
              categoriesData?.map((category: ICategory) => (
                <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-auto">
                  <MianCategoryChip
                    category={category}
                    isSelected={selectedCategoryId === category.id}
                    onSelect={handleCategorySelect}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>

          {categoriesData && categoriesData?.length > 3 && (
            <>
              <CarouselPrevious className="left-2" variant="text">
                <FaArrowLeftLong size={24} />
              </CarouselPrevious>
              <CarouselNext className="right-2" variant="text">
                <FaArrowRightLong size={24} />
              </CarouselNext>
            </>
          )}
        </Carousel>
      </div>

      <div className="mt-5">
        <Carousel
          className="w-full"
          opts={{
            align: 'start',
            loop: false,
            skipSnaps: false,
            dragFree: true,
          }}>
          <CarouselContent className="flex items-center">
            {isLoading &&
              pageIndex === 1 &&
              Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={`skeleton-${index}`} className="md:basis-1/2 lg:basis-1/4">
                  <CourseCardSkeleton />
                </CarouselItem>
              ))}

            {dataList &&
              dataList?.map((course: any) => (
                <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/4">
                  <MainCourseCard course={course} />
                </CarouselItem>
              ))}

            {/* Loading more skeleton cards */}
            {isLoading &&
              pageIndex > 1 &&
              Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem
                  key={`loading-skeleton-${index}`}
                  className="md:basis-1/2 lg:basis-1/4">
                  <CourseCardSkeleton />
                </CarouselItem>
              ))}
          </CarouselContent>

          {dataList && dataList?.length > 3 && (
            <>
              <CarouselPrevious className="left-2" variant="text">
                <FaArrowLeftLong size={24} />
              </CarouselPrevious>
              <CarouselNext
                className="right-2"
                variant="text"
                hasMore={hasMore}
                onLoadMore={handleLoadMore}>
                <FaArrowRightLong size={24} />
              </CarouselNext>
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
}
