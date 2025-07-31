import Image from 'next/image';
import { FaArrowLeftLong } from 'react-icons/fa6';
import mainHeroSectionImg from '@/assets/imgs/main-hero-section.webp';
import womenHeroSectionImg from '@/assets/imgs/women-hero-section.webp';
import { Button } from '@/shared';

export default function HeroSection() {
  return (
    <div className="max-w-laptop relative mx-auto mt-20 h-[51.25rem] w-full overflow-hidden">
      <div className="from-background absolute bottom-0 z-30 h-[12rem] w-full bg-gradient-to-t to-transparent" />
      <div className="absolute z-10 h-full w-full bg-gradient-to-bl from-black via-black/90 to-black/50" />
      <Image
        src={mainHeroSectionImg}
        alt="main-hero-section"
        className="absolute h-[51.25rem] max-w-[50rem] object-cover"
      />

      <Image
        src={womenHeroSectionImg}
        alt="women-hero-section"
        className="absolute right-0 bottom-0 z-10 hidden h-[42.25rem] w-[31rem] object-cover lg:block"
      />
      <div className="absolute inset-0 z-10 flex justify-center text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-[3.75rem] font-bold text-transparent lg:text-[5rem]">
            يومًا <span dir="ltr">30</span>
          </p>
          <p className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-[1.75rem] font-bold text-transparent lg:text-[3rem]">
            كافية لتحقيق أهدافك
          </p>
          <p className="text-center text-sm text-white lg:text-lg">
            منصة تدرب الرائدة في مجال التدريب في الخليج و الوطن <br></br>العربي منذ أكثر من 10 سنوات
            في مجال التعلم عن بعد
          </p>

          <Button
            leftIcon={<FaArrowLeftLong size={18} />}
            className="mt-4 px-10 py-3 text-base font-extrabold lg:py-4.5">
            ابدأ التعلم الآن
          </Button>
        </div>
      </div>
    </div>
  );
}
