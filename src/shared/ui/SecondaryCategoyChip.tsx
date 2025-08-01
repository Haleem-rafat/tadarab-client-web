import React from 'react';
import Image from 'next/image';
import art from '@/assets/icons/art.svg';
import home from '@/assets/icons/home.svg';
import selfDevelopment from '@/assets/icons/self-development.svg';
import familyAndEducationalSkills from '@/assets/icons/family-and-educational-skills.svg';
import languageAndSciences from '@/assets/icons/language-and-sciences.svg';
import technology from '@/assets/icons/technology.svg';

// Icon mapping to handle different naming conventions
const iconMapping: { [key: string]: string } = {
  // Direct mappings
  art: art,
  home: home,
  'self-development': selfDevelopment,
  'family-and-educational-skills': familyAndEducationalSkills,
  'language-and-sciences': languageAndSciences,
  technology: technology,

  // Alternative mappings (if API returns different names)
  arts: art,
  family: familyAndEducationalSkills,
  languages: languageAndSciences,
  tech: technology,
  self: selfDevelopment,
  development: selfDevelopment,
  education: familyAndEducationalSkills,
  science: languageAndSciences,

  // Add more mappings as needed
};

// Array of all available icons for random selection
const allIcons = [
  art,
  home,
  selfDevelopment,
  familyAndEducationalSkills,
  languageAndSciences,
  technology,
];

// Function to get random icon
const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * allIcons.length);
  return allIcons[randomIndex];
};

export default function SecondaryCategoyChip({
  title1,
  title2,
  icon,
}: {
  title1: string;
  title2: string;
  icon?: string;
}) {
  console.log('Original icon:', icon);

  // Get the mapped icon path or use random icon
  const mappedIconPath = icon
    ? iconMapping[icon.toLowerCase()] || getRandomIcon()
    : getRandomIcon();
  console.log('Mapped icon path:', mappedIconPath);

  // Get random icons for each chip if no specific icon is provided
  const icon1 = icon ? mappedIconPath : getRandomIcon();
  const icon2 = icon ? mappedIconPath : getRandomIcon();

  return (
    <div className="flex flex-col gap-4 py-7">
      {/* First row */}
      <div className="">
        <div className="bg-background-secondary-categories shadow-secondary-categories relative w-fit rounded-[25.689px] p-[1.284px]">
          <div className="absolute inset-0 rounded-[25.689px] bg-gradient-to-b from-[#6DDCFF] via-[#7F60F9] to-[#00040D] opacity-100"></div>
          <div className="bg-background-secondary-categories relative h-full w-full rounded-[24.405px] px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-bold whitespace-nowrap text-white">{title1}</span>
              <div className="flex-shrink-0">
                <Image
                  src={icon1}
                  alt={title1}
                  className="h-8 w-8"
                  onError={(e) => {
                    console.log('Icon not found:', icon1);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="flex flex-wrap">
        <div className="bg-background-secondary-categories shadow-secondary-categories relative w-fit rounded-[25.689px] p-[1.284px]">
          <div className="absolute inset-0 rounded-[25.689px] bg-gradient-to-b from-[#6DDCFF] via-[#7F60F9] to-[#00040D] opacity-100"></div>
          <div className="bg-background-secondary-categories relative h-full w-full rounded-[24.405px] px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-bold whitespace-nowrap text-white">{title2}</span>
              <div className="flex-shrink-0">
                <Image
                  src={icon2}
                  alt={title2}
                  className="h-8 w-8"
                  onError={(e) => {
                    console.log('Icon not found:', icon2);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
