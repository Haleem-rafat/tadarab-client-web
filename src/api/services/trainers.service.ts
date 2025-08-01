import { IResponse } from '../types/api.types';
import api from '..';

import { ITrainer } from '../types/trainers.types';
import { EAPI } from '@/constants/endpoints';

interface IGetAllTrainersParams {
  page: number;
  per_page: number;
}

class trainersService {
  public async getAllTrainers(params: IGetAllTrainersParams): Promise<IResponse<ITrainer, 'list'>> {
    const { data } = await api.get(EAPI.TRAINERS, { params });
    return data;
  }
}

export default Object.freeze(new trainersService());
