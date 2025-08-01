import Image from 'next/image';
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedin,
  FaSnapchatGhost,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import applePay from '@/assets/icons/apple-pay.svg';
import kNet from '@/assets/icons/k-net.svg';
import mada from '@/assets/icons/mada.svg';
import masterCard from '@/assets/icons/master-card.svg';
import payPal from '@/assets/icons/pay-pal.svg';
import visa from '@/assets/icons/visa.svg';
import womenAvatar from '@/assets/imgs/women-avatar.webp';
import { Accordion, Button, WhiteTadarabLogo } from '@/shared/index';

export default function Footer() {
  return (
    <div className="w-full px-5 pt-24 lg:px-24">
      <div className="max-w-laptop mx-auto w-full">
        <p className="pb-10 text-end text-lg font-extrabold text-white lg:text-3xl">
          أكثر الأسئلة الشائعة
        </p>
        <Accordion />
      </div>
      <div className="max-w-laptop mx-auto flex flex-col-reverse flex-wrap items-center justify-between gap-5 pt-5 lg:flex-row">
        <div className="flex w-full flex-col items-end gap-5 rounded-4xl bg-white/5 px-4 py-9 lg:w-xs">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end gap-1">
              <p className="rounded-t-sm rounded-l-xl rounded-br-xl bg-white px-3 py-1 text-xs">
                👋 أهلاً بك
              </p>
              <p className="rounded-t-sm rounded-l-xl rounded-br-xl bg-white px-3 py-1 text-xs">
                {' '}
                هل لديك سؤال؟{' '}
              </p>
            </div>
            <Image src={womenAvatar} alt="women avatar" width={40} height={40} />
          </div>
          <p className="text-white/80">تحتاج مساعدة أو استفسار؟</p>
          <Button
            rightIcon={<FaWhatsapp size={18} className="h-4 w-4 lg:h-5 lg:w-5" />}
            className="!rounded-2xl !bg-white/5 px-5 py-3 text-base font-bold"
            aria-label="تواصل معنا عبر واتساب">
            تواصل معنا
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-10">
            <ul className="flex flex-col items-end gap-3 text-end">
              <li className="text-input-placeholder text-sm font-bold lg:text-base">عن تدرب</li>
              <li className="text-sm font-bold text-white lg:text-base">انضم كمدرب </li>
              <li className="text-sm font-bold text-white lg:text-base"> الشروط والأحكام </li>
              <li className="text-sm font-bold text-white lg:text-base">الشروط والأحكام للمدرب</li>
              <li className="text-sm font-bold text-white lg:text-base">سياسات الخصوصية</li>
              <li className="text-sm font-bold text-white lg:text-base">
                سياسة ملفات تعريف الارتباط
              </li>
            </ul>
            <ul className="text-input-placeholde flex flex-col items-end gap-3">
              <li className="text-input-placeholder text-sm font-bold lg:text-base">روابط هامة</li>
              <li className="text-sm font-bold text-white lg:text-base">تدرب بلا حدود</li>
              <li className="text-sm font-bold text-white lg:text-base">الدورات التدريبية</li>
              <li className="text-sm font-bold text-white lg:text-base">الدورات المجانية</li>
              <li className="text-sm font-bold text-white lg:text-base">المدربين</li>
              <li className="text-sm font-bold text-white lg:text-base">المدونة</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-end gap-5">
          <div className="flex flex-col items-end gap-2">
            <WhiteTadarabLogo />
            <p className="pt-2 text-end text-white">
              منصة تدرب التعليمية للدورات الأون لاين في الوطن العربي
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-input-placeholder">وسائل الدفع عبر تدرب</p>
            <div className="flex items-center justify-end gap-2">
              <Image src={applePay} alt="apple-pay" width={40} height={40} />
              <Image src={mada} alt="mada" width={40} height={40} />
              <Image src={payPal} alt="pay-pal" width={40} height={40} />
              <Image src={kNet} alt="k-net" width={40} height={40} />
              <Image src={visa} alt="visa" width={40} height={40} />
              <Image src={masterCard} alt="master card" width={40} height={40} />
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-input-placeholder">قريباً تطبيق تدرب</p>
            <p className="flex items-center gap-2 text-white">
              <FaGooglePlay />
              <FaApple />
              على الأيفون والأندرويد
            </p>
          </div>
        </div>
      </div>
      <hr className="my-5 border-transparent lg:my-10 lg:border-white/10" />
      <div className="flex flex-col-reverse items-center justify-between gap-5 pb-6 lg:flex-row lg:items-end">
        <div className="text-input-placeholder flex items-center gap-5">
          <FaYoutube size={20} />
          <FaLinkedin size={20} />
          <FaSnapchatGhost size={20} />
          <FaTiktok size={20} />
          <FaFacebookF size={20} />
          <FaInstagram size={20} />
        </div>
        <p className="text-white">جميع الحقوق محفوظة © 2024 تدرب</p>
      </div>
    </div>
  );
}
