import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile() : Observable<any>{
    return new Observable<any>(observer =>{
      observer.next({
        displayName : "John doe",
        givenName : "John",
        id : "1",
        jobTitle : "Software Engineer",
        mail : "jdoe@azure.net",
        surname : "Doe",
        userPrincipalName : "jdoe@azure.net"
      })
    })
  }
}
