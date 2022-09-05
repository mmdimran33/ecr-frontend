import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormService } from './modules/form/form.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
  constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authService = this.injector.get(FormService);
        let tokenizedReq = request.clone({
            setHeaders: {
              // Authorization: 'Bearer xx.yy.zz'
              Authorization: `bearerToken ${authService.getToken()}`
            }
          })
          console.log('tokenizedReq : ' , tokenizedReq);
          
          return next.handle(tokenizedReq);
    }
}