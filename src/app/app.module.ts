import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ChangePasswordComponent } from './password';
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
        
    ],
    declarations: [
        AppComponent,
        ChangePasswordComponent

		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }