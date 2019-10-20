import { ILocation } from 'src/app/models/user.interface';

export interface ILocationsState {
  locations: Array<ILocation>;
  selectedLocationId?: string;
}

export const initialLocationsState: ILocationsState = {
  locations: [
    {
      name: 'Baytown Plastic Plant',
      country: 'USA',
      ownerEmail: 'test@gmail.com',
      address: 'Chemicals',
      id: '20920202',
      _rid: '33333',
      _self: '333',
      _ts: new Date(),
      _etag: 'test'
    },
    {
      name: 'Kearl',
      country: 'USA',
      ownerEmail: 'test@gmail.com',
      address: 'Chemicals',
      id: '20920201',
      _rid: '33333',
      _self: '333',
      _ts: new Date(),
      _etag: 'test'
    }
  ],
  selectedLocationId: undefined,
};
