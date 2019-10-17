import { ICamera } from 'src/app/models/camera.interface';

export interface ICamerasState {
  cameras: Array<ICamera>;
}

export const initialCamerasState: ICamerasState = {
  cameras: [
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
};
