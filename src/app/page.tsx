'use client';

import dynamic from 'next/dynamic';
import HeroSection from './_components/HeroSection';
import BestSellerCourses from './_components/BestSellerCourses';

// Lazy load components that are below the fold
const MostPopularCourses = dynamic(() => import('./_components/MostPopularCourses'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const NewCourses = dynamic(() => import('./_components/NewCourses'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const Categories = dynamic(() => import('./_components/Categories'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const FreeCourses = dynamic(() => import('./_components/FreeCourses'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const StartYourLearningJourney = dynamic(() => import('./_components/StartYourLearningJourney'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const Feedback = dynamic(() => import('./_components/Feedback'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const ForBusiness = dynamic(() => import('./_components/ForBusiness'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const Trainers = dynamic(() => import('./_components/Trainers'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

const ContactUs = dynamic(() => import('./_components/ContactUs'), {
  loading: () => <div className="h-96 animate-pulse rounded-lg bg-gray-200" />,
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-16 lg:gap-y-20">
      <HeroSection />
      <BestSellerCourses />
      <NewCourses />
      <MostPopularCourses />
      <Categories />
      <FreeCourses />
      <StartYourLearningJourney />
      <Feedback />
      <ForBusiness />
      <Trainers />
      <ContactUs />
    </div>
  );
}
