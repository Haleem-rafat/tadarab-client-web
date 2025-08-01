'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface AccordionItemProps {
  title: string;
  body: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface AccordionGroupProps {
  groupTitle: string;
  items: {
    title: string;
    body: string;
  }[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, body, isOpen, onToggle }) => {
  return (
    <div dir="rtl" className="rounded-xl bg-white/5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between p-4 text-right transition-colors hover:text-white/80"
        aria-expanded={isOpen}>
        <span className="text-lg font-extrabold text-white">{title}</span>
        <FaChevronDown
          className={`h-5 w-5 text-white transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="pr-4 pb-4">
          <p className="leading-relaxed text-white/85">{body}</p>
        </div>
      </div>
    </div>
  );
};

const AccordionGroup: React.FC<AccordionGroupProps> = ({ groupTitle, items }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="w-full">
      <h3 className="mb-6 text-end text-2xl font-bold text-white">{groupTitle}</h3>
      <div className="flex flex-col gap-5">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            body={item.body}
            isOpen={openItem === index}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default function Accordion() {
  // Example data - you can pass this as props or fetch from API
  const accordionData: AccordionGroupProps[] = [
    {
      groupTitle: 'تدرب بلا حدود',
      items: [
        {
          title: 'ما هو اشتراك تدرب بلا حدود؟',
          body: 'تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات التعليمية بانتظارك. شاهد جميع الدورات المضافة حديثًا دون مصاريف إضافية. تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات التعليمية.',
        },
        {
          title: 'هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟',
          body: 'نعم، يمكنك مشاهدة كل الدورات التدريبية المتاحة في المنصة باشتراك تدرب بلا حدود. لا يوجد حد للدورات التي يمكنك مشاهدتها.',
        },
        {
          title: 'كيف اشتراك في نظام تدرب بلا حدود؟',
          body: 'يمكنك الاشتراك في تدرب بلا حدود بسهولة من خلال زيارة صفحة الاشتراكات واختيار الخطة المناسبة لك. بعد إتمام عملية الدفع، ستتمكن من الوصول إلى جميع الدورات التدريبية المتاحة في المنصة.',
        },
      ],
    },
    {
      groupTitle: 'نظام الدفع',
      items: [
        {
          title: 'ما هي طرق الدفع المتاحة؟',
          body: 'نوفر العديد من طرق الدفع الآمنة مثل البطاقات الائتمانية، PayPal، والدفع عبر الهاتف المحمول. جميع المعاملات محمية بأحدث تقنيات الأمان.',
        },
        {
          title: 'هل الدفع آمن؟',
          body: 'نعم، جميع عمليات الدفع محمية بأحدث تقنيات التشفير والأمان. لا نخزن أي معلومات مالية على خوادمنا.',
        },
        {
          title: 'كيف يمكنني إلغاء الاشتراك؟',
          body: 'يمكنك إلغاء الاشتراك في أي وقت من خلال إعدادات حسابك. لن يتم خصم أي مبالغ إضافية بعد الإلغاء.',
        },
      ],
    },
    {
      groupTitle: 'الشهادات التدريبية',
      items: [
        {
          title: 'هل أحصل على شهادة بعد إتمام الدورة؟',
          body: 'نعم، تحصل على شهادة إتمام معتمدة فور الانتهاء من الدورة التدريبية. يمكنك تحميلها وطباعتها.',
        },
        {
          title: 'هل الشهادات معتمدة؟',
          body: 'نعم، جميع الشهادات معتمدة ومقبولة في معظم المؤسسات والشركات في الوطن العربي.',
        },
        {
          title: 'كيف يمكنني الوصول لشهاداتي؟',
          body: 'يمكنك الوصول لجميع شهاداتك من خلال صفحة "شهاداتي" في حسابك الشخصي.',
        },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col gap-12">
        {accordionData.map((group, groupIndex) => (
          <AccordionGroup key={groupIndex} groupTitle={group.groupTitle} items={group.items} />
        ))}
      </div>
    </div>
  );
}

// Export the components for use in other files
export { AccordionGroup, AccordionItem };
