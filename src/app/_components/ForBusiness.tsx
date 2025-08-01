import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import capitalMarketLogo from '@/assets/imgs/capital-market-logo.webp';
import elhasbaLogo from '@/assets/imgs/elhasba-logo.webp';
import forBusinessBg from '@/assets/imgs/for-business-bg.webp';
import kunaLogo from '@/assets/imgs/kuna-logo.webp';
import nationalELearingLogo from '@/assets/imgs/national-e-learing-logo.webp';
import oogooCarLogo from '@/assets/imgs/oogoo-car-logo.webp';
import suoltanOmanLogo from '@/assets/imgs/suoltan-oman-logo.webp';
import { Button, MainTadarabLogo } from '@/shared';

export default function ForBusiness() {
  return (
    <section
      className="relative mx-auto flex h-full min-h-[28rem] w-full flex-col items-center justify-center lg:max-h-[39rem]"
      aria-labelledby="for-business-title"
      role="banner">
      <div className="from-background absolute bottom-0 h-[12rem] w-full bg-gradient-to-t to-transparent" />
      <Image
        src={forBusinessBg}
        alt="خلفية قسم تدرب للأعمال - منصة تدريبية للشركات والمؤسسات"
        className="max-h-[39rem] min-h-[20rem] w-full bg-no-repeat object-cover"
        priority
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        placeholder="blur"
      />
      <div className="max-w-laptop absolute top-0 left-1/2 mx-auto h-full w-full -translate-x-1/2">
        <div className="flex flex-col items-center justify-center gap-4 pt-24 lg:items-end">
          <div className="flex items-center gap-2">
            <MainTadarabLogo className="h-5 w-24 lg:h-10 lg:w-52" />
            <p className="text-2xl text-white">for business</p>
          </div>
          <h1 id="for-business-title" className="text-2xl font-extrabold text-white lg:text-4xl">
            اكتشف عالم تدرب للأعمال
          </h1>
          <p className="max-w-lg text-center text-sm font-bold text-white/85 lg:text-end lg:text-xl">
            تحديات سوق العمل لا تنتهي! طور مهارات مُوظفيك لتتناسب مع اقتصاد اليوم، اختر الخطة
            التدريبية التي تناسب أهداف عملك وتواصل معنا الآن.
          </p>
          <Button
            leftIcon={<IoIosArrowBack size={18} className="h-4 w-4 lg:h-5 lg:w-5" />}
            className="mt-4 px-12 py-3 text-base font-extrabold lg:py-4.5"
            aria-label="اعرف المزيد عن خدمات تدرب للأعمال">
            اعرف المزيد
          </Button>
        </div>
        <div className="absolute bottom-0 z-10 mx-auto w-full lg:bottom-14">
          <h2 className="mb-2 text-center text-sm font-extrabold text-white/85 lg:text-end lg:text-2xl">
            شركاء النجاح في تدرب بيزنس
          </h2>
          {/* Desktop: Centered with space between */}
          <div
            className="hidden w-full items-center justify-between lg:flex"
            role="list"
            aria-label="شركاء تدرب للأعمال">
            <Image
              src={oogooCarLogo}
              alt="شعار شركة أوجو كار"
              className="h-8 w-20 lg:h-10 lg:w-24"
              role="listitem"
            />
            <Image
              src={kunaLogo}
              alt="شعار شركة كونا"
              className="h-10 w-28 lg:h-14 lg:w-36"
              role="listitem"
            />
            <Image
              src={capitalMarketLogo}
              alt="شعار هيئة أسواق المال"
              className="h-14 w-28 lg:h-20 lg:w-36"
              role="listitem"
            />
            <Image
              src={suoltanOmanLogo}
              alt="شعار سلطنة عمان"
              className="h-16 w-16 lg:h-24 lg:w-24"
              role="listitem"
            />
            <Image
              src={elhasbaLogo}
              alt="شعار شركة الحسبة"
              className="h-10 w-20 lg:h-14 lg:w-24"
              role="listitem"
            />
            <Image
              src={nationalELearingLogo}
              alt="شعار المركز الوطني للتعلم الإلكتروني"
              className="h-10 w-28 lg:h-14 lg:w-36"
              role="listitem"
            />
          </div>

          {/* Mobile: Horizontally scrollable */}
          <div
            className="scrollbar-hide w-full overflow-x-auto lg:hidden"
            role="list"
            aria-label="شركاء تدرب للأعمال">
            <div className="flex min-w-max items-center gap-6 px-6">
              <Image
                src={oogooCarLogo}
                alt="شعار شركة أوجو كار"
                className="h-8 w-20 flex-shrink-0"
                role="listitem"
              />
              <Image
                src={kunaLogo}
                alt="شعار شركة كونا"
                className="h-10 w-28 flex-shrink-0"
                role="listitem"
              />
              <Image
                src={capitalMarketLogo}
                alt="شعار هيئة أسواق المال"
                className="h-14 w-28 flex-shrink-0"
                role="listitem"
              />
              <Image
                src={suoltanOmanLogo}
                alt="شعار سلطنة عمان"
                className="h-16 w-16 flex-shrink-0"
                role="listitem"
              />
              <Image
                src={elhasbaLogo}
                alt="شعار شركة الحسبة"
                className="h-10 w-20 flex-shrink-0"
                role="listitem"
              />
              <Image
                src={nationalELearingLogo}
                alt="شعار المركز الوطني للتعلم الإلكتروني"
                className="h-10 w-28 flex-shrink-0"
                role="listitem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
