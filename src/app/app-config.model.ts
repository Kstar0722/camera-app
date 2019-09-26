export interface IAppConfig {
  name: string;
  production: boolean;

  adalConfig: {
    clientId: string;
    tenant: string;
    cacheLocation: string;
    endpoints: any;
  };
}
