export interface IResponse<T> {
  code: number;
  datas: T[];
  data: T | T[];
  message: string;
  statusCode: number;
}
