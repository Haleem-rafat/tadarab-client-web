'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BiChevronDown, BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Button, DropdownMenu, HeaderIllustrations, Input, MainTadarabLogo } from '@/shared';
import starIcon from '@/assets/icons/star.svg';
import shopCarIcon from '@/assets/icons/shop-car.svg';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [searchName, setSearchName] = useState('');
  console.log(searchName);

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <HeaderIllustrations />
      </div>
      <div className="bg-header-background backdrop-blur-header-background-blur px-5">
        <div className="max-w-laptop mx-auto flex items-center justify-between gap-5 py-3 text-sm font-bold text-white lg:justify-center">
          <Button variant="underline" className="relative z-50 text-sm font-extrabold">
            اشترك الآن
          </Button>
          <p className="relative z-50 text-xs font-bold lg:text-base">
            {isMobile
              ? 'خصم 80% بمناسبة شهر رمضان الكريم'
              : 'خصم 80% بمناسبة شهر رمضان الكريم لفترة محدودة'}
          </p>
        </div>
      </div>
      <div className="bg-background relative z-50 px-5">
        <div className="max-w-laptop mx-auto flex w-full items-center justify-between gap-5 py-2">
          <div className="flex items-center gap-3">
            <Button variant="text" className="py-3 text-sm font-bold">
              <Image src={shopCarIcon} alt="shop-car" />
              <Button variant="text" className="block py-3 text-sm font-bold lg:hidden">
                <BiSearch size={24} />
              </Button>
            </Button>
          </div>

          <Button variant="secondary" className="hidden px-5 py-3 text-sm font-bold lg:block">
            تسجيل الدخول
          </Button>
          <Button
            variant="tinted"
            rightIcon={<Image src={starIcon} alt="star" />}
            className="hidden px-5 py-3 text-sm font-bold lg:flex">
            تدرب بلا حدود
          </Button>
          <Button variant="text" className="hidden py-3 text-sm font-bold lg:block">
            تدرب للأعمال
          </Button>
          <Button variant="text" className="hidden py-3 text-sm font-bold lg:block">
            انضم كمدرب
          </Button>

          {!isMobile && (
            <Input
              dir="rtl"
              value={searchName}
              className="placeholder:text-input-placeholder w-full flex-1"
              onChange={(e: any) => setSearchName(e.target.value)}
              rightIcon={<BiSearch size={16} />}
              placeholder={`ماذا تريد ان تتعلم اليوم؟`}
            />
          )}

          <DropdownMenu
            className="hidden lg:block"
            trigger={
              <Button
                leftIcon={<BiChevronDown size={20} className="text-input-placeholder" />}
                variant="text"
                className="py-3 text-sm font-bold">
                استكشف الأقسام
              </Button>
            }
          />
          <MainTadarabLogo />

          <Button variant="text" className="block py-3 text-sm font-bold lg:hidden">
            <HiOutlineMenuAlt3 size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
