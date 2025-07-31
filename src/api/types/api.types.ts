export interface IResponsePayloadSingle<T> {
  data: T;
}
export interface IResponsePayloadList<T> {
  data: T[];
}

export interface IResponse<T, K extends 'list' | 'single', CustomKeys = object> {
  data?: K extends 'list' ? T[] : K extends 'single' ? T & Partial<CustomKeys> : never;
  status: string;
  message: string;
  suggested_courses: any[];
  recently_visited_pages: any[];
  pagination: Pagination;
}

export interface Pagination {
  current: number;
  previous: any;
  next: number;
  per_page: number;
  pages: number;
  count: number;
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

export interface ILabel {
  en: string;
  ar: string;
}

export interface ITutor {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  email: string;
  phone: string;
  title: string;
  bio: string;
  avatar_url: string;
  slug: string;
  buyers_count: number;
  courses_count: number;
  instagram_url: string;
  twitter_url: string;
  facebook_url: string;
  linkedin_url: string;
  youtube_url: string;
  snapchat_url?: string;
  allow_subscription_plans: boolean;
  allow_system_ads: boolean;
  seo_title: string;
  seo_metadesc?: string;
  seo_image?: string;
  is_admin: boolean;
  is_tutor: boolean;
  affiliator: boolean;
  star: boolean;
  ranking: number;
  active_courses_count: number;
  deeplink_url: string;
  country?: ICountry;
}

export interface ICountry {
  id: number;
  name: string;
}
