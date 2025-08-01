# Tadarab Client Web

A modern, responsive web application for the Tadarab educational platform built with Next.js 15, React 19, and TypeScript.

## 🎯 Project Overview

Tadarab Client Web is a comprehensive educational platform that provides users with access to courses, categories, trainers, and learning resources. The application features a modern, responsive design with smooth animations and intuitive user experience.

## ✨ Features

### Core Features
- **Course Management**: Browse bestseller, popular, new, and free courses
- **Category System**: Organized course categories and subcategories
- **Trainer Profiles**: Information about course instructors and experts
- **Learning Journey**: Guided learning paths and recommendations
- **Business Solutions**: Enterprise learning solutions
- **Contact & Support**: User feedback and contact forms

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js 15 with Turbopack for fast development
- **Type Safety**: Full TypeScript implementation
- **State Management**: SWR for data fetching and caching
- **Animations**: Framer Motion for smooth interactions
- **Carousel Components**: Embla Carousel and Swiper for content display
- **API Integration**: Axios-based API client with interceptors

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tadarab-client-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
tadarab-client-web/
├── src/
│   ├── api/                    # API layer
│   │   ├── services/           # API services
│   │   │   ├── api.ts         # Axios instance
│   │   │   ├── courses.service.ts
│   │   │   ├── categories.service.ts
│   │   │   └── trainers.service.ts
│   │   └── types/             # API type definitions
│   ├── app/                   # Next.js App Router
│   │   ├── _components/       # Page-specific components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BestSellerCourses.tsx
│   │   │   ├── Categories.tsx
│   │   │   └── ...
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── assets/                # Static assets
│   │   ├── icons/            # SVG icons
│   │   ├── illustrations/    # Illustration files
│   │   └── imgs/             # Image files
│   ├── config/               # Configuration files
│   │   └── env.ts            # Environment configuration
│   ├── constants/            # Application constants
│   │   ├── endpoints.ts      # API endpoints
│   │   └── swrkeys.ts        # SWR cache keys
│   ├── hooks/                # Custom React hooks
│   │   ├── useInfiniteScroll.ts
│   │   └── useMediaQuery.ts
│   ├── shared/               # Shared components
│   │   ├── components/       # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   └── ui/              # UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Carousel.tsx
│   │       └── ...
│   └── utils/               # Utility functions
│       └── formatTime.tsx
├── public/                  # Public assets
├── package.json
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run dev:prod` | Start development server in production mode |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run start` | Start production server |
| `npm run start:dev` | Start development server |
| `npm run lint` | Run ESLint for code quality |

## 🔧 Configuration

### Environment Variables

The application uses environment-based configuration. The main configuration is in `src/config/env.ts`:

- **Development**: `https://staging-api.tadarab.com/api`
- **Production**: `https://staging-api.tadarab.com/api` (API), `https://tadarab.com` (App)
- **Test**: `https://staging-api.tadarab.com/api`

### Next.js Configuration

The application uses a custom Next.js configuration (`next.config.ts`) with optimized image handling:

#### Image Optimization
The configuration includes remote patterns for image optimization from multiple sources:

- **Tadarab API Domains**: 
  - `staging-api.tadarab.com` - Staging environment
  - `api.tadarab.com` - Production API
- **AWS S3 Buckets**:
  - `s3.me-south-1.amazonaws.com` - Middle East region
  - `s3-us-west-2.amazonaws.com` - US West region
  - `tadarab.s3.us-west-2.amazonaws.com` - Tadarab-specific bucket
- **Avatar Service**:
  - `avatar.iran.liara.run` - User avatar hosting

This configuration enables Next.js Image component optimization for all images served from these domains, providing:
- Automatic image optimization
- Responsive image generation
- WebP format conversion
- Lazy loading
- Proper caching headers

### API Configuration

The API client is configured with:
- Base URL from environment configuration
- JSON content type headers
- Response interceptors for error handling
- Automatic error logging for 404 and 5xx errors

## 🎨 UI Components

### Core Components
- **Header**: Navigation and branding
- **Footer**: Links and company information
- **CourseCard**: Display course information
- **CategoryChip**: Category selection chips
- **Carousel**: Content carousels with Embla and Swiper
- **Button**: Reusable button components
- **Input**: Form input components

### Page Components
- **HeroSection**: Main landing section
- **BestSellerCourses**: Featured courses
- **Categories**: Course categories
- **Trainers**: Instructor profiles
- **ContactUs**: Contact form
- **ForBusiness**: Enterprise solutions

## 🔌 API Integration

### Services
- **Courses Service**: Course-related API calls
- **Categories Service**: Category management
- **Trainers Service**: Trainer information

### Data Fetching
- **SWR**: For data fetching and caching
- **Infinite Scroll**: For paginated content
- **Error Handling**: Centralized error management

## 🔄 Custom Hooks

### useInfiniteScroll Hook

The `useInfiniteScroll` hook provides seamless infinite scrolling functionality for paginated data with SWR integration.

#### Hook Signature
```typescript
function useInfiniteScroll(
  swrData: any,
  swrMutate: any,
  pageIndex: number,
  setPageIndex: any,
  isLoading: boolean
) {
  // Returns: { hasMore, handleLoadMore, dataList }
}
```

#### Parameters
- `swrData`: SWR response data containing pagination info and data array
- `swrMutate`: SWR mutate function to trigger data refetch
- `pageIndex`: Current page number (state)
- `setPageIndex`: Function to update page index (state setter)
- `isLoading`: Loading state from SWR

#### Return Values
- `hasMore`: Boolean indicating if more data is available
- `handleLoadMore`: Function to trigger loading more data
- `dataList`: Accumulated data array from all pages

#### Usage Example

```typescript
import { useState } from 'react';
import useSWR from 'swr';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import coursesService from '@/api/services/courses.service';

const PER_PAGE = 6;

export default function BestSellerCourses() {
  const [pageIndex, setPageIndex] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  // SWR data fetching
  const {
    data: swrData,
    isLoading,
    mutate,
  } = useSWR([SWR_KEYS.BEST_SELLER_COURSES, pageIndex, selectedCategoryId], () =>
    coursesService.getAllCourses({
      page: pageIndex,
      per_page: PER_PAGE,
      filters: {
        scope: 'best-seller',
        ...(selectedCategoryId && { topics: selectedCategoryId }),
      },
    })
  );

  // Infinite scroll hook
  const { hasMore, handleLoadMore, dataList } = useInfiniteScroll(
    swrData,
    mutate,
    pageIndex,
    setPageIndex,
    isLoading
  );

  // Reset pagination when filters change
  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
    setPageIndex(1); // Reset to first page
  };

  return (
    <div>
      {/* Category filters */}
      <CategoryFilters onSelect={handleCategorySelect} />
      
      {/* Course list with infinite scroll */}
      <Carousel>
        <CarouselContent>
          {dataList?.map((course) => (
            <CarouselItem key={course.id}>
              <CourseCard course={course} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Load more button */}
        {hasMore && (
          <CarouselNext onLoadMore={handleLoadMore}>
            Load More
          </CarouselNext>
        )}
      </Carousel>
    </div>
  );
}
```

#### Key Features
- **Automatic Data Accumulation**: Combines data from multiple pages
- **Loading States**: Handles loading states for initial and subsequent loads
- **Pagination Reset**: Supports resetting pagination when filters change
- **SWR Integration**: Seamlessly works with SWR for caching and revalidation
- **Performance Optimized**: Only updates data when necessary

#### Best Practices
1. **Reset Pagination**: Always reset `pageIndex` to 1 when filters change
2. **Loading States**: Use different loading states for initial vs. subsequent loads
3. **Error Handling**: Implement error boundaries for failed requests
4. **Memory Management**: Consider implementing data cleanup for large lists
5. **Accessibility**: Ensure keyboard navigation works with infinite scroll

## 🎯 Key Features Implementation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Custom media query hooks
- Responsive component layouts

### Performance
- Next.js 15 with Turbopack
- Image optimization
- Code splitting
- Lazy loading

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support

## 🧪 Development Guidelines

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

### Component Structure
- Functional components with hooks
- Props interface definitions
- Component composition patterns

### State Management
- React hooks for local state
- SWR for server state
- Context API for global state (if needed)

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Setup
Ensure proper environment variables are set for production deployment.

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [SWR Documentation](https://swr.vercel.app)

---

**Built with ❤️ using Next.js, React, and TypeScript**
