'use client';
import React from 'react';
import useSWR from 'swr';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import HeaderCardSection from '@/shared/components/HeaderCardsSection';
import categoriesService from '@/api/services/categories.service';
import { SWR_KEYS } from '@/constants/swrkeys';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  SecondaryCategoyChip,
} from '@/shared';
import { ICategory } from '@/api/types/category.types';

export default function Categories() {
  const { data: categoriesData } = useSWR([SWR_KEYS.CATEGORIES], () =>
    categoriesService.getAllCategories().then((data) => data?.data as ICategory[])
  );

  return (
    <section className="max-w-laptop mx-auto w-full">
      <HeaderCardSection whiteTitle="أقسام" redTitle="الدورات" textButton="جميع الدورات" />

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
              categoriesData?.map((category: ICategory, index: number) => {
                // Get odd indexed categories
                const oddCategories = categoriesData.filter((_, i) => i % 2 === 1);

                // Only render for even indexes to avoid duplicates
                if (index % 2 === 0) {
                  const title1 = category.title;
                  const title2 = oddCategories[index / 2]?.title || category.title;

                  return (
                    <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-auto">
                      <SecondaryCategoyChip title1={title1} title2={title2} icon={category.icon} />
                    </CarouselItem>
                  );
                }
                return null;
              })}
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
    </section>
  );
}
