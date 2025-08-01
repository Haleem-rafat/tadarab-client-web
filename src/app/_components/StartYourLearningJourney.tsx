import Image from 'next/image';
import Button from '@/shared/ui/Button';
import leftSection from '@/assets/imgs/left-section.webp';
import rightSection from '@/assets/imgs/right-section.webp';
import { WhiteTadarabLogo } from '@/shared';

export default function StartYourLearningJourney() {
  return (
    <section
      className="bg-green-light relative mx-auto mt-24 mb-20 flex h-[500px] w-full max-w-[1240px] items-center justify-center overflow-hidden rounded-3xl text-center"
      aria-labelledby="learning-journey-title"
      role="banner">
      <div className="absolute bottom-0 z-10 h-full w-full bg-gradient-to-tr from-[#051015] to-[#216A581A] lg:hidden" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 lg:gap-6">
        <h2 id="learning-journey-title" className="text-2xl font-bold text-white lg:text-3xl">
          ابدأ رحلة التعلم مع
        </h2>
        <div className="flex items-center justify-center gap-2">
          <p className="text-green text-3xl font-bold lg:text-5xl">بلا حدود</p>
          <WhiteTadarabLogo className="h-7 w-auto lg:h-12" aria-label="شعار تدرب" />
        </div>
        <p className="text-center text-sm text-white lg:text-xl">
          تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات <br /> باشتراك واحد فقط
        </p>
        <div className="mt-5">
          <p className="pb-6 text-sm text-white lg:text-base">
            اشتراكات بتبدأ من 10.000 د.ك شهرياً
          </p>
          <Button
            className="!bg-green !text-background w-full py-4 font-bold"
            aria-label="اشترك الآن في تدرب">
            اشترك الآن
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <Image
          src={leftSection}
          alt="صورة تعليمية للجانب الأيسر - طلاب يتعلمون"
          className="h-[500px] w-full object-cover"
          priority
          quality={85}
          sizes="(max-width: 768px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="absolute top-0 right-0 hidden lg:block">
        <Image
          src={rightSection}
          alt="صورة تعليمية للجانب الأيمن - محتوى تعليمي"
          className="h-[500px] w-full object-cover"
          priority
          quality={85}
          sizes="(max-width: 1024px) 0vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
    </section>
  );
}
