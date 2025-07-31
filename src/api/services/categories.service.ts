import { IResponse } from '../types/api.types';
import { ICategory } from '../types/category.types';
import api from '..';

import { EAPI } from '@/constants/endpoints';

interface IGetAllCategoriesParams {
  filters: {
    parent: string;
  };
}

class categoriesService {
  public async getAllCategories(
    params?: IGetAllCategoriesParams
  ): Promise<IResponse<ICategory, 'list'>> {
    const { data } = await api.get(EAPI.CATEGORIES, { params });
    return data;
  }
}

export default Object.freeze(new categoriesService());
