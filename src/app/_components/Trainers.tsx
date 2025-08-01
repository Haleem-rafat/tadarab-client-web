'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWR from 'swr';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import trainersService from '@/api/services/trainers.service';
import { SWR_KEYS } from '@/constants/swrkeys';
import { ITrainer } from '@/api/types/trainers.types';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import HeaderCardSection from '@/shared/components/HeaderCardsSection';
import { Button } from '@/shared';

const PER_PAGE = 10;

// Default avatar fallback
const DEFAULT_AVATAR = 'https://avatar.iran.liara.run/public/28';

// Skeleton Loading Component
const TrainerSkeleton = () => (
  <div className="trainer-slide h-[400px] w-[273px] animate-pulse rounded-2xl bg-white/5">
    <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5"></div>
  </div>
);

export default function Trainers() {
  const [pageIndex, setPageIndex] = useState(1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const {
    data: swrData,
    isLoading,
    mutate,
  } = useSWR([SWR_KEYS.TRAINERS, pageIndex], () =>
    trainersService.getAllTrainers({
      page: pageIndex,
      per_page: PER_PAGE,
    })
  );

  const { hasMore, handleLoadMore, dataList } = useInfiniteScroll(
    swrData,
    mutate,
    pageIndex,
    setPageIndex,
    isLoading
  );

  if (isLoading && pageIndex === 1) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1.5,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Navigation]}
            className="trainers-swiper"
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}>
            {Array.from({ length: 7 }).map((_, index) => (
              <SwiperSlide key={index} className="trainer-slide h-[400px] w-[273px]">
                <TrainerSkeleton />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Navigation Button */}
          {!isMobile && (
            <button
              type="button"
              className="swiper-button-prev absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right Navigation Button */}
          {!isMobile && (
            <button
              type="button"
              className="swiper-button-next absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <HeaderCardSection whiteTitle="نخبة من مدربي" redTitle=" الوطن العربي" textButton="المزيد" />

      <div className="relative">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="trainers-swiper"
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}>
          {isLoading &&
            pageIndex === 1 &&
            Array.from({ length: 7 }).map((_, index) => (
              <SwiperSlide key={`skeleton-${index}`} className="trainer-slide h-[400px] w-[273px]">
                <TrainerSkeleton />
              </SwiperSlide>
            ))}

          {dataList &&
            dataList?.map((trainer: ITrainer) => (
              <SwiperSlide key={trainer.id} className="trainer-slide h-[400px] w-[273px]">
                <div className="relative h-[400px] w-[273px] overflow-hidden rounded-2xl">
                  <Image
                    src={trainer?.avatar_url || DEFAULT_AVATAR}
                    alt={trainer?.name || 'مدرب'}
                    fill
                    className="bg-input-placeholder object-cover"
                  />
                  <div className="absolute inset-0 bottom-0 rounded-2xl bg-gradient-to-b from-[#13141E00] to-[#13141E]" />
                  <div className="absolute right-0 bottom-5 left-0 p-4">
                    <p className="text-end text-2xl font-bold text-white">{trainer.name}</p>
                    <p className="text-end text-sm text-white/80">{trainer.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          {/* Loading more skeleton cards */}
          {isLoading &&
            pageIndex > 1 &&
            Array.from({ length: 3 }).map((_, index) => (
              <SwiperSlide
                key={`loading-skeleton-${index}`}
                className="trainer-slide h-[400px] w-[273px]">
                <TrainerSkeleton />
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Left Navigation Button */}

        {!isMobile && (
          <button
            type="button"
            className="swiper-button-prev absolute top-1/2 left-4 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all lg:flex">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Right Navigation Button */}
        {!isMobile && (
          <button
            type="button"
            onClick={hasMore ? handleLoadMore : undefined}
            disabled={isLoading && hasMore}
            className={`swiper-button-next absolute top-1/2 right-4 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all lg:flex ${
              hasMore && isLoading ? 'animate-pulse' : ''
            }`}>
            <svg
              className={`h-6 w-6 ${hasMore && isLoading ? 'animate-spin' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-white/80">هل تريد الإنضمام إلى منصة تدرب التعليمية كمدرب؟</p>
        <Button
          leftIcon={<MdOutlineKeyboardArrowLeft size={24} />}
          variant="secondary"
          className="px-10 py-3 font-bold">
          قدم كمدرب الآن
        </Button>
      </div>
    </div>
  );
}
