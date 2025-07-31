import React from 'react';

export default function CourseCardSkeleton() {
  return (
    <div
      dir="rtl"
      className="min-h-[350px] max-w-[335px] overflow-hidden rounded-xl transition-transform">
      {/* Image skeleton */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <div className="h-full w-full animate-pulse bg-gray-700" />
      </div>

      {/* Content skeleton */}
      <div className="bg-background-card flex min-h-[170px] flex-col gap-2 px-5 pt-4 pb-5">
        {/* Title skeleton */}
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-700" />

        {/* Subtitle skeleton */}
        <div className="h-4 w-1/2 animate-pulse rounded bg-gray-700" />

        {/* Divider skeleton */}
        <div className="h-1 w-4 bg-gray-700" />

        {/* Rating and info skeleton */}
        <div className="flex items-center gap-5">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-700" />
          <div className="h-4 w-12 animate-pulse rounded bg-gray-700" />
          <div className="h-4 w-14 animate-pulse rounded bg-gray-700" />
        </div>

        {/* Button skeleton */}
        <div className="mt-5 h-12 w-full animate-pulse rounded bg-gray-700" />
      </div>
    </div>
  );
}
