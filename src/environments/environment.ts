// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { IAppConfig } from '../app/app-config.model';

const environment: IAppConfig = {
  production: false,
  name: 'dev',
  adalConfig: {
    clientId: 'a1eced6d-60c4-4197-be23-d16ac1822ac0',
    tenant: 'f5ada736-c405-4173-bf62-990f4a925727',
    cacheLocation: 'localStorage',
    endpoints: {
      // "https://localhost:44311":
      'https://wa-sensai-api-ussc-dev.azurewebsites.net':
        'a1eced6d-60c4-4197-be23-d16ac1822ac0'
    }
  }
};

export default environment;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
