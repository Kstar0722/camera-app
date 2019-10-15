export interface ILocation {
  name: string;
  country: string;
  ownerEmail: string;
  address: string;
  id: string;
  _rid: string;
  _self: string;
  _ts: Date;
  _etag: string;
}

export interface ILocations {
  locations: Array<ILocation>;
}

export interface IAppState {
  locations: ILocations;
}
