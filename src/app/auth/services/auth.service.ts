import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, shareReplay, tap, throwError} from "rxjs";
import { Login, Register} from "../models";



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

  registers(register: Register) {
    return this.http.post(`${this._apiUrl}/register`, register)
      shareReplay();
  }


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
