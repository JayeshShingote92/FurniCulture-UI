import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseURL = 'https://furnicultureapi.azurewebsites.net';
  constructor(private httpClient: HttpClient) { }


  addCustomerEnquiry(data:any): Observable<any>{
    return this.httpClient.post<any>(this.baseURL +'/api/UserRegistration/SaveUser', data);
  }

  addSubscriptionEmail(data:any): Observable<any> {
    return this.httpClient.post(this.baseURL + '/api/UserRegistration/SaveSubscribedMail', data);
  }
}
