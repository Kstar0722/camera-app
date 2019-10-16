export interface IAppConfig {
  name: string;
  production: boolean;
  apiUrl: string;
  adalConfig: {
    clientId: string;
    tenant: string;
    cacheLocation: string;
    endpoints: any;
  };
}
