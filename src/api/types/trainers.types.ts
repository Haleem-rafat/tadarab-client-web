import { ICountry } from './api.types';

export interface ITrainer {
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
  seo_metadesc: string;
  seo_image: string;
  is_admin: boolean;
  is_tutor: boolean;
  affiliator: boolean;
  star: boolean;
  ranking: number;
  active_courses_count: number;
  deeplink_url: string;
  country?: ICountry;
}
