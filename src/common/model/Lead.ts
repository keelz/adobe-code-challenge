export type Lead = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  entryDate: string;
}

export enum LEAD_UNIQUE_KEY {
  ID = '_id',
  EMAIL = 'email',
}

