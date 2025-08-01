import HeroSection from './_components/HeroSection';
import BestSellerCourses from './_components/BestSellerCourses';
import MostPopularCourses from './_components/MostPopularCourses';
import NewCourses from './_components/NewCourses';
import FreeCourses from './_components/FreeCourses';
import Categories from './_components/Categories';
import StartYourLearningJourney from './_components/StartYourLearningJourney';
import Feedback from './_components/Feedback';
import ForBusiness from './_components/ForBusiness';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <BestSellerCourses />
      <NewCourses />
      <MostPopularCourses />
      <Categories />
      <FreeCourses />
      <StartYourLearningJourney />
      <Feedback />
      <ForBusiness />
    </div>
  );
}
