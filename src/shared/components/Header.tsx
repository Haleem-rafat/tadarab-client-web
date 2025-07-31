'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { Button, DropdownMenu, HeaderIllustrations, Input, MainTadarabLogo } from '@/shared';
import starIcon from '@/assets/icons/star.svg';
import shopCarIcon from '@/assets/icons/shop-car.svg';

export default function Header() {
  const [searchName, setSearchName] = useState('');
  console.log(searchName);

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <div className="absolute left-1/2 -translate-x-1/2">
        <HeaderIllustrations />
      </div>
      <div className="bg-header-background backdrop-blur-header-background-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-5 py-3 text-sm font-bold text-white">
          <Button variant="underline" className="relative z-50 text-sm font-extrabold">
            اشترك الآن
          </Button>
          <p>خصم 80% بمناسبة شهر رمضان الكريم لفترة محدودة</p>
        </div>
      </div>
      <div className="bg-background relative z-50">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-5 py-3">
          <Button variant="text" className="py-3 text-sm font-bold">
            <Image src={shopCarIcon} alt="shop-car" />
          </Button>
          <Button variant="secondary" className="px-5 py-3 text-sm font-bold">
            تسجيل الدخول
          </Button>
          <Button
            rightIcon={<Image src={starIcon} alt="star" />}
            variant="tinted"
            className="px-5 py-3 text-sm font-bold">
            تدرب بلا حدود
          </Button>
          <Button variant="text" className="py-3 text-sm font-bold">
            تدرب للأعمال
          </Button>
          <Button variant="text" className="py-3 text-sm font-bold">
            انضم كمدرب
          </Button>

          <Input
            dir="rtl"
            value={searchName}
            className="placeholder:text-input-placeholder w-full flex-1"
            onChange={(e: any) => setSearchName(e.target.value)}
            rightIcon={<BiSearch size={16} />}
            placeholder={`ماذا تريد ان تتعلم اليوم؟`}
          />
          <DropdownMenu
            trigger={
              <Button variant="text" className="py-3 text-sm font-bold">
                استكشف الأقسام{' '}
              </Button>
            }
          />
          <MainTadarabLogo />
        </div>
      </div>
    </div>
  );
}
