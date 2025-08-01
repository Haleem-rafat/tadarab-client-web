import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@/shared';
import contactUsImg from '@/assets/imgs/contact-us-img.webp';

export default function ContactUs() {
  return (
    <section
      className="bg-background-contact-us flex min-h-[28rem] w-full items-center justify-center pb-4"
      aria-labelledby="contact-us-title"
      role="region">
      <div className="max-w-laptop relative mx-auto h-full w-full px-5">
        <div className="flex h-full flex-col items-center justify-center gap-8 pr-0 lg:flex-row lg:justify-start lg:pr-32">
          {/* Content Section - Left on Desktop, Top on Mobile */}
          <div className="order-2 mt-96 flex flex-col items-center gap-6 text-center lg:order-1 lg:mt-auto lg:w-1/2 lg:items-end lg:text-end">
            <div className="space-y-4">
              <h2 id="contact-us-title" className="text-2xl font-extrabold text-white lg:text-3xl">
                تحتاج مساعدة أو استفسار؟
              </h2>
              <p className="text-lg text-white/85 lg:text-xl">قم بالتواصل معنا عبر WhatsApp</p>
            </div>
            <Button
              rightIcon={<FaWhatsapp size={18} className="h-4 w-4 lg:h-5 lg:w-5" />}
              className="px-8 py-3 text-base font-bold lg:px-10 lg:py-4"
              aria-label="تواصل معنا عبر واتساب">
              تواصل معنا
            </Button>
          </div>

          {/* Image Section - Right on Desktop, Top on Mobile */}
          <div className="absolute right-0 bottom-42 order-1 flex items-center justify-center lg:right-10 lg:-bottom-36 lg:order-2 lg:w-1/2">
            <Image
              src={contactUsImg}
              alt="صورة التواصل معنا - فريق خدمة العملاء في تدرب"
              width={519}
              height={560}
              className="h-auto w-full max-w-md lg:max-w-lg"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
