import HeroSection from './_components/HeroSection';
import BestSellerCourses from './_components/BestSellerCourses';
import MostPopularCourses from './_components/MostPopularCourses';
import NewCourses from './_components/NewCourses';
import FreeCourses from './_components/FreeCourses';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <BestSellerCourses />
      <NewCourses />
      <FreeCourses />
      <MostPopularCourses />
    </div>
  );
}
