'use client';
import React from 'react';
import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import { BiSolidTimeFive } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';
import { Button } from '@/shared';
import { ICourse } from '@/api/types/courses.types';
import { formatTime } from '@/utils/formatTime';
import useMediaQuery from '@/hooks/useMediaQuery';

interface MainCourseCardProps {
  course: ICourse;
  onCardClick?: (courseId: number) => void;
  onWatchTrailer?: (courseId: number) => void;
  className?: string;
  priority?: boolean;
}

export default function MainCourseCard({
  course,
  onCardClick,
  onWatchTrailer,
  className,
  priority = false,
}: MainCourseCardProps) {
  const [imageError, setImageError] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleCardClick = () => {
    onCardClick?.(course.id);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = course.image_optimized_url || course.image_url || '/placeholder-course.jpg';
  const imageAlt = `${course.title} - صورة الدورة التدريبية`;

  return (
    <div
      dir="rtl"
      className={`h-full min-h-[350px] max-w-[210px] cursor-pointer overflow-hidden rounded-xl transition-transform lg:max-w-[335px] ${className || ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`دورة تدريبية: ${course.title} بواسطة ${course.tutor.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}>
      <div className={`relative h-[340px] overflow-hidden rounded-xl lg:h-[180px] lg:rounded-none`}>
        {!imageError ? (
          <>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority={priority}
              sizes="(max-width: 768px) 100vw, 335px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              onError={handleImageError}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Text overlay on image */}
            {isMobile && (
              <div className="absolute right-0 bottom-0 left-0 z-10 flex flex-col gap-2 p-4">
                <h3
                  className="line-clamp-1 text-base font-extrabold text-white"
                  title={course.title}>
                  {course.title}
                </h3>
                <p className="text-sm font-normal text-white" title={course.tutor.name}>
                  {course.tutor.name}
                </p>
                <div className="h-1 w-4 bg-white" aria-hidden="true"></div>
                <div className="text-input-placeholder flex items-center gap-5">
                  <div
                    className="flex items-center gap-1 text-xs font-light"
                    title={`مدة الفيديو: ${course.video_duration}`}>
                    <BiSolidTimeFive size={16} aria-hidden="true" />
                    <span>{formatTime(course.video_duration)}</span>
                  </div>
                  <div
                    className="flex items-center gap-1 text-xs font-light"
                    title={`عدد المتعلمين: ${course.learners}`}>
                    <HiUsers size={16} aria-hidden="true" />
                    <span>{course.learners}</span>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-800">
            <div className="text-center text-gray-400">
              <div className="mb-2 text-4xl">📚</div>
              <div className="text-sm">صورة الدورة</div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom content - only show on desktop */}
      {!isMobile && (
        <div className="bg-background-card flex h-full flex-col gap-2 px-5 pt-4 pb-5 text-white">
          <h3 className="line-clamp-1 text-base font-extrabold" title={course.title}>
            {course.title}
          </h3>
          <p className="text-sm font-normal" title={course.tutor.name}>
            {course.tutor.name}
          </p>
          <div className="h-1 w-4 bg-white" aria-hidden="true"></div>
          <div className="text-input-placeholder flex items-center gap-5">
            <div
              className="flex items-center gap-1 text-xs font-light"
              title={`${course.reviews_average} من 5 نجوم`}>
              <TiStarFullOutline size={16} aria-hidden="true" />
              <span>{course.reviews_average}</span>
              <span>({course.learners} تقييم)</span>
            </div>
            <div
              className="flex items-center gap-1 text-xs font-light"
              title={`مدة الفيديو: ${course.video_duration}`}>
              <BiSolidTimeFive size={16} aria-hidden="true" />
              <span>{formatTime(course.video_duration)}</span>
            </div>
            <div
              className="flex items-center gap-1 text-xs font-light"
              title={`عدد المتعلمين: ${course.learners}`}>
              <HiUsers size={16} aria-hidden="true" />
              <span>{course.learners}</span>
            </div>
          </div>
          <Button
            leftIcon={<FaPlay size={16} aria-hidden="true" />}
            variant="secondary"
            className="mt-5 w-full py-3 text-xs font-bold"
            onClick={() => onWatchTrailer?.(course.id)}
            aria-label={`شاهد إعلان دورة ${course.title}`}>
            شاهد اعلان الدورة
          </Button>
        </div>
      )}
    </div>
  );
}
