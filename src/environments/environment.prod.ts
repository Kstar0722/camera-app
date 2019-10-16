import { IAppConfig } from '../app/app-config.model';

const environment: IAppConfig = {
  production: true,
  name: 'prod',
  apiUrl: 'https://wa-sensai-api-ussc-dev.azurewebsites.net/api',
  adalConfig: {
    clientId: '7793ec4c-7625-4650-9561-88063cbc0240',
    tenant: 'f5ada736-c405-4173-bf62-990f4a925727',
    cacheLocation: 'localStorage',
    endpoints: {
      'https://wa-sensai-api-ussc-dev.azurewebsites.net':
        'a1eced6d-60c4-4197-be23-d16ac1822ac0'
    }
  }
};

export default environment;
