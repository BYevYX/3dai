import { ModelsRoute } from './routes';

export const getModelRoute = (modelName: string) =>
  `${ModelsRoute}/${modelName}`;
