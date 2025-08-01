import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Button } from '@/shared/index';

interface IHeaderCardSectionProps {
  whiteTitle: string;
  redTitle: string;
  textButton?: string;
  linkButton?: () => void | null;
}

export default function HeaderCardSection({
  whiteTitle,
  redTitle,
  textButton,
  linkButton,
}: IHeaderCardSectionProps) {
  return (
    <div className="mb-6 flex w-full items-center justify-between">
      <div>
        {textButton && (
          <Button
            leftIcon={<MdOutlineKeyboardArrowLeft size={24} />}
            variant="text"
            className="text-2xl font-bold"
            onClick={linkButton}>
            {textButton}
          </Button>
        )}
      </div>
      <div>
        <p className="text-3xl font-extrabold text-white">
          {whiteTitle} <span className="text-primary">{redTitle}</span>
        </p>
      </div>
    </div>
  );
}
