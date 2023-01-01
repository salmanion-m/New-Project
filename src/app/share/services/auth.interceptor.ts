import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "../../auth";
import {environment} from "../../../environments/environment";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // request = request.clone({
      // //   headers: request.headers.set('authorization' , 'token')
      // // })
      // //
      // const token = this.authService.getAuthToken();
      // if(token){
      //   request = request.clone({
      //     setHeaders: {Authorization: `Authorization token ${token}`}
      //   });
      // }
      //
      // // return next.handle(request);
      // return next.handle(request).pipe(
      //   catchError((err) => {
      //     if (err instanceof HttpErrorResponse) {
      //       if (err.status === 401) {
      //         // redirect user to the logout page
      //       }
      //     }
      //     return throwError(err);
      //   })
      // )


    // return  next.handle(this.addAuthToken(request));
    //
    request = request.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : ' text/plain',
        'Authorization': `Bearer ${this.authService.getAuthToken()}`,
      }
    })
    return next.handle(request);
  }

  // addAuthToken(request: HttpRequest<any>){
  //   const token = this.authService.getAuthToken();
  //
  //   return request.clone({
  //     setHeaders:{ Authorization: `Basic ${token}`}
  //   })
  // }

}
