import { Owner } from './Owner';

export interface Pet {
  id: number;
  version: number;
  sendReminders: boolean;
  name: string;
  weight: number
  type: string;
  owner: Owner;
}
