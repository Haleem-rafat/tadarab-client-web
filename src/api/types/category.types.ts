import { Parent, TopCourse } from './api.types';

export interface ICategory {
  id: number;
  title: string;
  title_en: string;
  parent_id?: number;
  color: string;
  slug: string;
  icon: string;
  cover_url: string;
  description: string;
  courses_count: number;
  subcategories_count: number;
  seo_title: string;
  seo_metadesc?: string;
  seo_image?: string;
  parent?: Parent;
  top_courses: TopCourse[];
}
