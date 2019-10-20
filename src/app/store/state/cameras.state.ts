import { ICamera } from 'src/app/models/camera.interface';

export interface ICamerasState {
  cameras: Array<ICamera>;
}

export const initialCamerasState: ICamerasState = {
  cameras: [
    {
      name: 'Aggolomerated',
      location_Id: '20202',
      connectivity: '333',
      imageRate: 10,
      notes: '333',
      id: '20920203',
      _rid: '33333',
      _self: '333',
      _ts: new Date(),
      _etag: 'test'
    },
    {
      name: 'Aggolomerated',
      location_Id: '20202',
      connectivity: '333',
      imageRate: 10,
      notes: '333',
      id: '20920201',
      _rid: '33333',
      _self: '333',
      _ts: new Date(),
      _etag: 'test'
    }
  ],
};
