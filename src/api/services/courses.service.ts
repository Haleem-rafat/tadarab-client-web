import { IResponse } from '../types/api.types';
import { ICourse } from '../types/courses.types';
import api from '..';

import { EAPI } from '@/constants/endpoints';

interface IGetAllCoursesParams {
  page: number;
  per_page: number;
  filters: {
    scope: 'best-seller' | 'new' | 'popular' | 'free';
  };
}

class coursesService {
  public async getAllCourses(params: IGetAllCoursesParams): Promise<IResponse<ICourse, 'list'>> {
    const { data } = await api.get(EAPI.COURSES, { params });
    return data;
  }
}

export default Object.freeze(new coursesService());
