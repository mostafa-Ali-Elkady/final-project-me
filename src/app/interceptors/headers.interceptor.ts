import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem("userToken") !== null) {
      const myHeaders: any = {
        token: localStorage.getItem("userToken"),
      };
      request = request.clone({
        setHeaders: myHeaders,
      });
    }

    return next.handle(request);
  }
}
