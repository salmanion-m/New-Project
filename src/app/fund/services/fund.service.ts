import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Fund} from "../models";
import {IndustTable} from "../../industry";

@Injectable({
  providedIn: 'root'
})
export class FundService {

  protected _apiUrl: string;


  constructor(protected http: HttpClient) {
    this._apiUrl = `${environment.apiUrl}/Fund`
  }

  // getFundList(): Observable<Fund[]> {
  //   return this.http.get<Fund[]>(`${environment.apiUrl}/Fund`);
  // }

  //sending token
  getFundList(): Observable<Fund[]> {
    const header = new HttpHeaders({
      'const-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.' +
        'eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiZXhwIjoxNjcwNDg3NjE0LCJpc' +
        '3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTk3IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE5NyJ9.R8zg5HGcPdfDpYWK2pfQjbPAWpoyHGOamThCxv8XVVEE00bgj_Qyf_lAo-Y6ZhMkbELkVn9JdntB6YGCkKcEpA',
    })
    return this.http.get<Fund[]>(`${this._apiUrl}`,{headers: header});
  }


}
