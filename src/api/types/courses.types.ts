import { ILabel, ITutor } from './api.types';

export interface ICourse {
  id: number;
  title: string;
  title_en?: string;
  status: string;
  description: string;
  details: string;
  allow_comments: boolean;
  level: string;
  key_points: string[];
  prerequisites: string[];
  features?: IFeature[];
  image_url: string;
  image_optimized_url: string;
  slug: string;
  comments_count: number;
  reviews_average: number;
  video_duration: number;
  promo_video_duration: number;
  promo_video_url: string;
  promo: IPromo[];
  lessons_count: number;
  created_at: string;
  updated_at: string;
  enrollments_count: number;
  seo_title: string;
  seo_metadesc: string;
  seo_image: string;
  faqs: IFaq[];
  workshop_details: IWorkshopDetails;
  deeplink_url: string;
  tags: string[];
  labels: ILabel[];
  reviews_count: number;
  price: number;
  discounted_price: number;
  discounted_price_usd: number;
  discounted_price_kwd: number;
  currency_code: string;
  tutor: ITutor;
  topics: Topic[];
  learners: number;
  watching_hours: number;
  is_in_cart: boolean;
  is_in_favorites: boolean;
  is_purchased: boolean;
  is_in_user_subscription: boolean;
  enrollment_details: any;
  sections: Section[];
}

export interface IFeature {
  icon: string;
  text: string;
}

export interface IPromo {
  src: string;
  type: string;
  label: string;
}

export interface IFaq {
  a: string;
  q: string;
}

export interface IWorkshopDetails {
  date?: string;
  time?: string;
  seats?: string;
  pdf_url?: string;
  stickybar_title?: string;
}

export interface Topic {
  id: number;
  title: string;
  title_en: string;
  parent_id: number;
  color: string;
  slug: string;
  icon: string;
  cover_url: string;
  description: string;
  courses_count: number;
  subcategories_count: number;
  seo_title: string;
  seo_metadesc: string;
  seo_image: string;
  parent: Parent;
  top_courses: TopCourse[];
}

export interface Parent {
  id: number;
  title: string;
  title_en: string;
  parent_id: any;
  color: string;
  slug: string;
  icon: string;
  cover_url: string;
  description: string;
  courses_count: number;
  subcategories_count: number;
  seo_title: string;
  seo_metadesc: string;
  seo_image: string;
  parent: any;
  top_courses: TopCourse[];
}

export interface TopCourse {
  title: string;
  slug: string;
  description: string;
  image_url: string;
  image_optimized_url: string;
  labels: ILabel[];
  tutor: ITutor;
}

export interface Section {
  id: number;
  name: string;
  position: number;
  video_duration: number;
  lessons_count: number;
  created_at: string;
  updated_at: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  name: string;
  type: string;
  position: number;
  is_free: boolean;
  created_at: string;
  updated_at: string;
  file_url?: string;
  video_duration?: string;
  video_id?: string;
  video_source?: VideoSource[];
  sources?: Source[];
  video_review_url?: string;
  video_review_download_url?: string;
}

export interface VideoSource {
  src: string;
  type?: string;
  label?: string;
  selected: any;
}

export interface Source {
  src: string;
  type?: string;
  label?: string;
  selected: any;
}
