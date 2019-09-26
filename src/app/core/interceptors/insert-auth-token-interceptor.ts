import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import environment from 'src/environments/environment';

@Injectable()
export class InsertAuthTokenInterceptor implements HttpInterceptor {
  constructor(private adal: MsAdalAngular6Service) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // get api url from adal config
    if (this.adal === undefined) { return next.handle(req); }
    let host = req.url.substring(8);
    const hostEnd = host.indexOf('/');
    if (hostEnd > 0) { host = 'https://' + host.substring(0, hostEnd); }
    const resource = this.adal.GetResourceForEndpoint(req.url);
    if (
      !resource ||
      !this.adal.isAuthenticated ||
      environment.adalConfig.endpoints[host] === undefined
    ) {
      return next.handle(req);
    }

    // merge the bearer token into the existing headers
    return this.adal.acquireToken(resource).pipe(
      mergeMap((token: string) => {
        const authorizedRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(authorizedRequest);
      })
    );
  }
}
