export interface ILocation {
  name: string;
  title: string;
  location: string;
  image: string;
  checked: boolean;
}

export interface ILocations {
  locations: Array<ILocation>;
}

export interface IAppState {
  locations: ILocations;
}
