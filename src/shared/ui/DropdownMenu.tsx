'use client';

import React, { useState, useRef, useEffect } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { ICategory } from '@/api/types/category.types';
import Button from '@/shared/ui/Button';

interface DropdownMenuProps {
  trigger?: React.ReactNode;
  className?: string;
  categories?: ICategory[];
  onCategorySelect?: (category: ICategory) => void;
  onSubCategorySelect?: (category: ICategory, subCategory: ICategory) => void;
}

// Mock subcategories for demo purposes
const mockSubCategories: ICategory[] = [
  {
    id: 101,
    title: 'تربية الأطفال',
    title_en: 'Child Rearing',
    color: '#3B82F6',
    slug: 'child-rearing',
    icon: '👶',
    cover_url: '',
    description: 'Child rearing techniques',
    courses_count: 5,
    subcategories_count: 0,
    seo_title: 'Child Rearing',
    top_courses: [],
  },
  {
    id: 102,
    title: 'التربية في سن المراهقة',
    title_en: 'Adolescent Education',
    color: '#3B82F6',
    slug: 'adolescent-education',
    icon: '🧑‍🎓',
    cover_url: '',
    description: 'Adolescent education',
    courses_count: 4,
    subcategories_count: 0,
    seo_title: 'Adolescent Education',
    top_courses: [],
  },
  {
    id: 103,
    title: 'التربية الجنسية للأطفال',
    title_en: 'Child Sex Education',
    color: '#3B82F6',
    slug: 'child-sex-education',
    icon: '📚',
    cover_url: '',
    description: 'Child sex education',
    courses_count: 3,
    subcategories_count: 0,
    seo_title: 'Child Sex Education',
    top_courses: [],
  },
  {
    id: 104,
    title: 'تحسين سلوكيات الطفل',
    title_en: 'Improving Child Behavior',
    color: '#3B82F6',
    slug: 'improving-child-behavior',
    icon: '🎯',
    cover_url: '',
    description: 'Improving child behavior',
    courses_count: 6,
    subcategories_count: 0,
    seo_title: 'Improving Child Behavior',
    top_courses: [],
  },
  {
    id: 105,
    title: 'التربية الحديثة',
    title_en: 'Modern Education',
    color: '#3B82F6',
    slug: 'modern-education',
    icon: '🚀',
    cover_url: '',
    description: 'Modern education techniques',
    courses_count: 7,
    subcategories_count: 0,
    seo_title: 'Modern Education',
    top_courses: [],
  },
];

const defaultCategories: ICategory[] = [
  {
    id: 1,
    title: 'تربية الأبناء',
    title_en: 'Parenting',
    color: '#3B82F6',
    slug: 'parenting',
    icon: '👨‍👩‍👧‍👦',
    cover_url: '',
    description: 'Learn about parenting and child development',
    courses_count: 25,
    subcategories_count: 5,
    seo_title: 'Parenting Courses',
    top_courses: [],
  },
  {
    id: 2,
    title: 'علوم الحاسب والتكنولوجيا',
    title_en: 'Computer Science & Technology',
    color: '#10B981',
    slug: 'computer-science',
    icon: '💻',
    cover_url: '',
    description: 'Programming and technology courses',
    courses_count: 50,
    subcategories_count: 8,
    seo_title: 'Computer Science Courses',
    top_courses: [],
  },
  {
    id: 3,
    title: 'الفنون والمهارات',
    title_en: 'Arts & Skills',
    color: '#F59E0B',
    slug: 'arts-skills',
    icon: '🎨',
    cover_url: '',
    description: 'Creative arts and skill development',
    courses_count: 30,
    subcategories_count: 6,
    seo_title: 'Arts & Skills Courses',
    top_courses: [],
  },
  {
    id: 4,
    title: 'ديكور المنزل',
    title_en: 'Home Decor',
    color: '#8B5CF6',
    slug: 'home-decor',
    icon: '🏠',
    cover_url: '',
    description: 'Home decoration and interior design',
    courses_count: 20,
    subcategories_count: 4,
    seo_title: 'Home Decor Courses',
    top_courses: [],
  },
  {
    id: 5,
    title: 'الاقتصاد والأعمال',
    title_en: 'Economics & Business',
    color: '#EF4444',
    slug: 'economics-business',
    icon: '💼',
    cover_url: '',
    description: 'Business and economics education',
    courses_count: 40,
    subcategories_count: 7,
    seo_title: 'Business Courses',
    top_courses: [],
  },
  {
    id: 6,
    title: 'تعلم اللغات',
    title_en: 'Language Learning',
    color: '#06B6D4',
    slug: 'language-learning',
    icon: '🌍',
    cover_url: '',
    description: 'Learn new languages',
    courses_count: 35,
    subcategories_count: 6,
    seo_title: 'Language Learning Courses',
    top_courses: [],
  },
];

export default function DropdownMenu({
  trigger,
  className,
  categories = defaultCategories,
  onCategorySelect,
  onSubCategorySelect,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);

  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');

  const dropdownRef = useRef<any>(null);
  const triggerRef = useRef<any>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as globalThis.Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as globalThis.Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown when pressing Escape key
  useEffect(() => {
    function handleEscapeKey(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const handleCategoryClick = (category: ICategory) => {
    setSelectedCategory(category);
    onCategorySelect?.(category);
  };

  const handleSubCategoryClick = (subCategory: ICategory) => {
    if (selectedCategory) {
      onSubCategorySelect?.(selectedCategory, subCategory);
    }
  };

  const handleToggle = () => {
    if (!isOpen) {
      // Calculate position when opening
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const dropdownHeight = 400; // Approximate height

        if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
          setPosition('top');
        } else {
          setPosition('bottom');
        }
      }
    } else {
      // When closing, clear selected category to remove sub-panel
      setSelectedCategory(null);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Trigger */}
      <div ref={triggerRef} onClick={handleToggle} className="cursor-pointer">
        {trigger}
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`absolute z-50 ${position === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'} right-0`}>
            <motion.div
              ref={dropdownRef}
              animate={{
                width: selectedCategory ? '41rem' : '20rem',
              }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="bg-background-dropdown min-w-[20rem] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}>
              {/* Main Content */}
              <div className="flex">
                {/* Left Panel - Sub Topics */}
                <AnimatePresence>
                  {selectedCategory && (
                    <motion.div
                      dir="rtl"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '50%', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="bg-background-dropdown-active overflow-hidden p-4">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-4 text-start text-lg font-semibold text-white">
                        أهم مواضيع {selectedCategory.title}
                      </motion.h3>
                      <div className="space-y-4">
                        {mockSubCategories.map((subCategory, index) => (
                          <motion.div
                            key={subCategory.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            onClick={() => handleSubCategoryClick(subCategory)}
                            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]">
                            <span>{subCategory.title}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Right Panel - Main Categories */}
                <motion.div
                  dir="rtl"
                  animate={{ width: selectedCategory ? '50%' : '100%' }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="py-4 pr-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="mb-4 text-start font-extrabold text-white">
                    أقسام التعلم
                  </motion.h3>

                  <div className="space-y-4">
                    {categories.map((category, index) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.03 }}
                        onClick={() => handleCategoryClick(category)}
                        className={`relative flex h-10 cursor-pointer items-center justify-between px-4 py-2.5 transition-all duration-300 ease-out ${
                          category.id === selectedCategory?.id
                            ? 'bg-background-dropdown-active rounded-r-xl text-white shadow-lg'
                            : 'hover:bg-background-dropdown rounded-lg text-gray-300 hover:scale-[1.02] hover:text-white'
                        }`}>
                        {/* Active state curved edges with enhanced animations */}
                        <AnimatePresence>
                          {category.id === selectedCategory?.id && (
                            <>
                              {/* Top curved edge */}
                              <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="bg-background-dropdown-active absolute -top-5 left-0 h-5 w-full origin-left"
                              />
                              <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
                                className="bg-background-dropdown absolute -top-5 left-0 h-5 w-full origin-left rounded-bl-[60px]"
                              />

                              {/* Bottom curved edge */}
                              <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
                                className="bg-background-dropdown-active absolute -bottom-5 left-0 h-5 w-full origin-left"
                              />
                              <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                exit={{ opacity: 0, scaleX: 0 }}
                                transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
                                className="bg-background-dropdown absolute -bottom-5 left-0 h-5 w-full origin-left rounded-tl-[60px]"
                              />
                            </>
                          )}
                        </AnimatePresence>

                        <motion.span
                          className="relative z-10"
                          animate={{
                            x: category.id === selectedCategory?.id ? 5 : 0,
                          }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}>
                          {category.title}
                        </motion.span>

                        <motion.div transition={{ duration: 0.3, ease: 'easeOut' }}>
                          <BiChevronLeft size={20} className="text-input-placeholder" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-5 ml-4">
                    <Button className="w-full bg-white py-3 font-bold !text-black">
                      استكشف جميع الدورات
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
