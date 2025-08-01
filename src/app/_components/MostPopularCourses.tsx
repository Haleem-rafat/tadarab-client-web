'use client';

import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';
import coursesService from '@/api/services/courses.service';
import { ICourse } from '@/api/types/courses.types';
import { SWR_KEYS } from '@/constants/swrkeys';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Carousel, CarouselContent, CarouselItem } from '@/shared';
import HeaderCardSection from '@/shared/components/HeaderCardsSection';
import { CarouselPagination } from '@/shared/ui/Carousel';

const PER_PAGE = 6;

// Skeleton Loading Component
const MostPopularCourseSkeleton = () => (
  <div className="h-[522px] w-full animate-pulse">
    <div className="flex h-full flex-col items-center justify-between lg:flex-row">
      {/* Image skeleton */}
      <div className="relative h-[300px] w-full rounded-2xl bg-white/10 lg:h-[400px] lg:w-[673px]" />
      {/* Content skeleton */}
      <div className="flex flex-col items-center gap-5 lg:items-end">
        <div className="h-8 w-24 rounded-xl bg-white/10" />
        <div className="h-16 w-64 rounded bg-white/10 lg:h-20 lg:w-80" />
        <div className="h-1 w-5 bg-white/10" />
        <div className="h-8 w-32 rounded bg-white/10" />
      </div>
    </div>
  </div>
);

export default function MostPopularCourses() {
  const [pageIndex, setPageIndex] = useState(1);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  const {
    data: swrData,
    isLoading,
    mutate,
  } = useSWR([SWR_KEYS.MOST_POPULAR_COURSES, pageIndex], () =>
    coursesService.getAllCourses({
      page: pageIndex,
      per_page: PER_PAGE,
      filters: {
        scope: 'popular',
      },
    })
  );

  const { dataList } = useInfiniteScroll(swrData, mutate, pageIndex, setPageIndex, isLoading);

  return (
    <section className="max-w-laptop mx-auto min-h-[522px] w-full">
      <HeaderCardSection whiteTitle="دورات و ورش" redTitle=" تدريبية قادمة" />

      <div className="mt-5">
        <Carousel
          className="w-full"
          pagination
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
                <CarouselItem key={`skeleton-${index}`} className="">
                  <MostPopularCourseSkeleton />
                </CarouselItem>
              ))}

            {dataList &&
              dataList?.map((course: ICourse) => (
                <CarouselItem key={course.id} className="">
                  <div className="h-[522px] w-full">
                    <div
                      className={`flex h-full items-center ${isMobile ? 'justify-between' : 'justify-between'}`}>
                      {isMobile ? (
                        <>
                          <div className="relative h-[300px] w-full drop-shadow-lg drop-shadow-black/30">
                            {/* Top shadow */}
                            <div className="absolute top-0 left-0 z-20 h-16 w-full bg-gradient-to-b from-black/40 to-transparent" />
                            {/* Bottom shadow */}
                            <div className="absolute bottom-0 left-0 z-20 h-16 w-full bg-gradient-to-t from-black/40 to-transparent" />
                            {/* Left shadow */}
                            <div className="absolute top-0 left-0 z-20 h-full w-16 bg-gradient-to-r from-black/40 to-transparent" />
                            {/* Right shadow */}
                            <div className="absolute top-0 right-0 z-20 h-full w-16 bg-gradient-to-l from-black/40 to-transparent" />
                            {/* Corner shadows */}
                            <div className="absolute top-0 left-0 z-30 h-16 w-16 bg-gradient-to-br from-black/50 to-transparent" />
                            <div className="absolute top-0 right-0 z-30 h-16 w-16 bg-gradient-to-bl from-black/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 z-30 h-16 w-16 bg-gradient-to-tr from-black/50 to-transparent" />
                            <div className="absolute right-0 bottom-0 z-30 h-16 w-16 bg-gradient-to-tl from-black/50 to-transparent" />
                            <Image
                              src={course.image_url}
                              alt={course.title}
                              fill
                              className="h-full w-full object-cover"
                            />
                            {/* Text overlay on image */}
                            <div className="absolute right-0 bottom-0 left-0 z-40 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <p className="mx-auto w-fit rounded-xl bg-white px-3 py-1 text-lg font-bold text-black">
                                {course?.labels[0]?.ar}
                              </p>
                              <p className="text-center text-lg font-bold text-white">
                                {course.title}
                              </p>
                              <p className="text-center text-sm text-white/80">
                                {course.tutor.name}
                              </p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative h-[400px] w-[673px] drop-shadow-lg drop-shadow-black/30">
                            {/* Top shadow */}
                            <div className="absolute top-0 left-0 z-20 h-16 w-full bg-gradient-to-b from-black/40 to-transparent" />
                            {/* Bottom shadow */}
                            <div className="absolute bottom-0 left-0 z-20 h-16 w-full bg-gradient-to-t from-black/40 to-transparent" />
                            {/* Left shadow */}
                            <div className="absolute top-0 left-0 z-20 h-full w-16 bg-gradient-to-r from-black/40 to-transparent" />
                            {/* Right shadow */}
                            <div className="absolute top-0 right-0 z-20 h-full w-16 bg-gradient-to-l from-black/40 to-transparent" />
                            {/* Corner shadows */}
                            <div className="absolute top-0 left-0 z-30 h-16 w-16 bg-gradient-to-br from-black/50 to-transparent" />
                            <div className="absolute top-0 right-0 z-30 h-16 w-16 bg-gradient-to-bl from-black/50 to-transparent" />
                            <div className="absolute bottom-0 left-0 z-30 h-16 w-16 bg-gradient-to-tr from-black/50 to-transparent" />
                            <div className="absolute right-0 bottom-0 z-30 h-16 w-16 bg-gradient-to-tl from-black/50 to-transparent" />
                            <Image
                              src={course.image_url}
                              alt={course.title}
                              fill
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col items-end gap-5">
                            <p className="rounded-xl bg-white px-3 py-1 text-lg font-bold text-black">
                              {course?.labels[0]?.ar}
                            </p>
                            <p className="max-w-[410px] text-end text-5xl font-bold text-white">
                              {course.title}
                            </p>
                            <div className="h-1 w-5 bg-white" />
                            <p className="text-3xl text-white">{course.tutor.name}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}

            {/* Loading more skeleton cards */}
            {isLoading &&
              pageIndex > 1 &&
              Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={`loading-skeleton-${index}`} className="">
                  <MostPopularCourseSkeleton />
                </CarouselItem>
              ))}
          </CarouselContent>

          <CarouselPagination />
        </Carousel>
      </div>
    </section>
  );
}
