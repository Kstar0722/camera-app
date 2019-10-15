export interface ILocation {
  name: string;
  title: string;
  location: string;
  image: string;
  checked: boolean;
}

export interface IAppState {
  locations: Array<ILocation>;
}
