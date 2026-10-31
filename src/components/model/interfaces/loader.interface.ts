import type { IOptions } from './api.interface';

export interface ILoader {
  readonly baseLink: string;
  readonly options: Readonly<IOptions>;
}
