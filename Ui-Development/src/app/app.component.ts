import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ui-Development';
  screen = 1;
  crativecol = 'crative';
  whatsappcol = '';
  smscol = '';

  crative(){
    this.whatsappcol ='';
    this.smscol = '';
    this.crativecol = 'crative';
  }

  whatsapp(){
    this.smscol = '';
    this.crativecol = '';
    this.whatsappcol ='whatsapp';
  }

  sms(){
    this.crativecol = '';
    this.whatsappcol ='';
    this.smscol = 'sms';
  }

  customizeandsend(){
    this.screen = 1;
  }

  back(value: number){
    this.screen = value;
  }

  Next(value: number){
    this.screen = value
  }
}
