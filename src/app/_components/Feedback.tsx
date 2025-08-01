import { WorldMap } from '@/shared';

export default function Feedback() {
  return (
    <section className="max-w-laptop relative mx-auto flex flex-col items-center justify-center">
      <WorldMap className="relative bottom-44 w-full lg:bottom-0" />
      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-extrabold text-white lg:text-4xl">أكثر من</p>
          <p className="text-primary text-4xl font-extrabold lg:text-6xl">
            متعلم <span dir="ltr">300,000</span>
          </p>
          <p className="text-2xl font-extrabold text-white lg:text-4xl">في الوطن العربي</p>
          <p className="mt-11 text-center text-sm text-white/60 lg:text-base">
            منصة تدرب الرائدة في مجال التدريب في الخليج والوطن العربي منذ أكثر من 10 سنوات في مجال
            التعلم من بعد
          </p>
        </div>
        <div className="mt-11 grid w-full grid-cols-2 gap-4 align-middle lg:grid-cols-4">
          <div className="order-3 mx-auto flex flex-col items-center justify-center lg:order-1">
            <p className="text-primary text-center text-3xl font-extrabold">10+</p>
            <p className="text-xl text-white">سنوات خبرة</p>
          </div>
          <div className="order-4 mx-auto flex flex-col items-center justify-center lg:order-2">
            <p className="text-primary text-center text-3xl font-extrabold">600+</p>
            <p className="text-xl text-white"> خبير ومدرب</p>
          </div>
          <div className="order-1 mx-auto flex flex-col items-center justify-center lg:order-3">
            <p className="text-primary text-center text-3xl font-extrabold">1100+</p>
            <p className="text-xl text-white"> دورة تدريبية</p>
          </div>
          <div className="order-2 mx-auto flex flex-col items-center justify-center lg:order-4">
            <p className="text-primary text-center text-3xl font-extrabold">
              ألاف <span dir="ltr">4+</span>
            </p>
            <p className="text-xl text-white"> ساعة تدريبية</p>
          </div>
        </div>
      </div>
    </section>
  );
}
