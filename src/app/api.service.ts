import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  public apiURL = '';

  constructor(public http:HttpClient) { }

  getUsuarios(){
    return this.http.get(this.apiURL)
  }
}
