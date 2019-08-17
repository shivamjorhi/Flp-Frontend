import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {PasswordService} from './passwordService';
import { PasswordEntity } from './models/PasswordEntity';
@Component({
    selector:'chng-pwd',
    templateUrl:'password.html'
})

export class ChangePasswordComponent{
    
    constructor(private service:PasswordService){}

    password:PasswordEntity={

    email:'',
    old_password:'',
    new_password:'',
    confirm_password:'',
    category:''
    }

  

    status:boolean=false;
    
    flag:boolean=false;
    obj2:PasswordEntity;
    chngpwd(){
        this.service.changePassword(this.password).subscribe(
            res=>{
                this.obj2=res;
                console.log(res)
            },
            err =>{
                alert("An error has occurred")
            }
        )

    }


}