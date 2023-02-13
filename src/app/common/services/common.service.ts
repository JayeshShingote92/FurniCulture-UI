import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseURL = 'https://furnicultureindiaapi.azurewebsites.net';
  //baseURL = 'https://localhost:7222';
  constructor(private httpClient: HttpClient) { }


  addCustomerEnquiry(data:any): Observable<any>{
    return this.httpClient.post<any>(this.baseURL +'/api/UserRegistration/SaveUser', data);
  }

  addSubscriptionEmail(data:any): Observable<any> {
    return this.httpClient.post(this.baseURL + '/api/UserRegistration/SaveSubscribedMail', data);
  }

  verifySubscriptionEmail(data:any): Observable<any> {
    return this.httpClient.get(this.baseURL + '/api/UserRegistration/VerifyEmailSubscriber?emailId=' + data);
  }

  verifyUserRegistration(activationCode:any,emailId:any): Observable<any> {
    return this.httpClient.get(this.baseURL + '/api/UserRegistration/VerifyUserAccount?activationCode='+activationCode+'&emailId='+emailId);
  }
}
