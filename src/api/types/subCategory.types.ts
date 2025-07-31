export interface ISubCategoryResponse {
  status: string;
  message: string;
  data: ISubCategory[];
}

export interface ISubCategory {
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
  seo_metadesc?: string;
  seo_image?: string;
  parent: Parent;
  top_courses: TopCourse2[];
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
  labels: Label[];
  tutor: Tutor;
}

export interface Label {
  en: string;
  ar: string;
}

export interface Tutor {
  name: string;
  avatar_url: string;
  bio: string;
}

export interface TopCourse2 {
  title: string;
  slug: string;
  description: string;
  image_url: string;
  image_optimized_url: string;
  labels: Label2[];
  tutor: Tutor2;
}

export interface Label2 {
  en: string;
  ar: string;
}

export interface Tutor2 {
  name: string;
  avatar_url: string;
  bio: string;
}
