import classNames from 'classnames';
import React from 'react';

interface ICategory {
  id: number | null;
  title: string;
  title_en?: string;
  slug?: string;
}

interface IMianCategoryChipProps {
  category: ICategory;
  isSelected?: boolean;
  onSelect?: (categoryId: number | null) => void;
  className?: string;
}

export default function MianCategoryChip({
  category,
  isSelected = false,
  onSelect,
  className,
}: IMianCategoryChipProps) {
  const handleClick = () => {
    onSelect?.(category.id ?? null);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        'border-border-mian-category cursor-pointer rounded-xl border px-4 py-3 text-sm font-bold transition-all duration-200',
        {
          'bg-white text-black shadow-lg': isSelected,
          'text-white': !isSelected,
        },
        className
      )}
      aria-label={`اختر فئة: ${category.title}`}
      aria-pressed={isSelected}>
      <span className="whitespace-nowrap">{category.title}</span>
    </button>
  );
}
