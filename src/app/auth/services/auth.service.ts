import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, shareReplay, tap, throwError} from "rxjs";
import {AuthenticatedResponse, Login, Register} from "../models";



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  protected _apiUrl: string

  constructor(protected http: HttpClient) {
    this._apiUrl = `${environment.apiUrl}/api/Auth`
  }

  //**
  getAuthToken(): any {
    return localStorage.getItem('token')
  }

  //register
  // register(register: Register): Observable<any> {
  //   return this.http.post<any>(`${this._apiUrl}/register`, register)
  // }

  registers(register: Register) {
    return this.http.post(`${this._apiUrl}/register`, register)
      shareReplay();
  }

  // Login(log: Login){
  //   return this.http.post(`${this._apiUrl}/login`,log)
  // }


  Login(log: Login){
    return this.http.post(`${this._apiUrl}/login`,log).pipe(
      tap((res: any) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }



}
