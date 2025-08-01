import HeroSection from './_components/HeroSection';
import BestSellerCourses from './_components/BestSellerCourses';
import MostPopularCourses from './_components/MostPopularCourses';
import NewCourses from './_components/NewCourses';
import FreeCourses from './_components/FreeCourses';
import Categories from './_components/Categories';
import StartYourLearningJourney from './_components/StartYourLearningJourney';
import Feedback from './_components/Feedback';
import ForBusiness from './_components/ForBusiness';
import ContactUs from './_components/ContactUs';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-x-16 lg:gap-y-20">
      <HeroSection />
      <BestSellerCourses />
      <NewCourses />
      <MostPopularCourses />
      <Categories />
      <FreeCourses />
      <StartYourLearningJourney />
      <Feedback />
      <ForBusiness />
      <ContactUs />
    </div>
  );
}
