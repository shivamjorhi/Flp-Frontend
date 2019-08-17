import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasswordEntity } from './models/PasswordEntity';
import { Observable } from 'rxjs';


let URL = "http://localhost:5000/password/change"

@Injectable({
    providedIn:'root'
})
export class PasswordService{
    
    constructor(private http:HttpClient){}
 
    changePassword(object1:PasswordEntity):any{
        return this.http.post(URL+"",object1)
    }


  
}