import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';// added
import { QuizComponent } from './quiz/quiz.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
     user: any;
     formInfo = {
     username: '',
     password: ''
   };

   // user: any;
   error: string;
   privateData: any ='';

   constructor(private session: SessionService) { }

   ngOnInit() {
     this.session.isLoggedIn()
       .subscribe(
         (user) => this.successCb(user)
       );
   }

   login() {
     this.session.login(this.formInfo)
       .subscribe(
         (user) => this.user = user,
         (err) => this.error = err
       );
   }

   signup() {
     this.session.signup(this.formInfo)
       .subscribe(
         (user) => this.user = user,
         (err) => this.error = err
       );
   }

   logout() {
     this.session.logout()
       .subscribe(
         () => this.user = null,
         (err) => this.error = err
       );
   }

   getPrivateData() {
     this.session.getPrivateData()
       .subscribe(
         (data) => this.privateData = data,
         (err) => this.error = err
       );
   }

   errorCb(err) {
     this.error = err;
     this.user = null;
   }

   successCb(user) {
     this.user = user;
     this.error = null;
   }
}
