import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ui-Development';
  screen = 0;
  crativecol = 'crative';
  whatsappcol = '';
  smscol = '';

  current = ['','','','','','','','','',''];
  filldash = ['','','','','','','','','',''];
  infill = ['','','','','','','','','',''];
  bar = ['','bar0','bar0','bar0','bar0','bar0','bar0','bar0','bar0','bar0'];

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
    if(this.screen == 1){
      this.current[0] = 'bar1'
      this.filldash[0] = '';
      this.infill[0] = '';
      this.bar[1] = 'bar0';
    }
  }

  back(value: number){
    this.screen = value;
    if(this.screen == 1){
      this.current[0] = 'bar1'
      this.filldash[0] = '';
      this.infill[0] = '';
      this.bar[1] = 'bar0';
    }

    if(this.screen == 2){
      this.current[1] = 'bar1'
      this.filldash[0] = 'dash';
      this.infill[0] = 'fill';
      this.filldash[1] = '';
       this.infill[1] = '';
      this.bar[1] = '';
      this.bar[2] = 'bar0';
    }

    if(this.screen == 3){
      this.current[2] = 'bar1'
       this.filldash[2] = '';
       this.infill[2] = '';
       this.bar[3] = 'bar0';
     }

    if(this.screen == 4){
      this.current[3] = 'bar1'
       this.filldash[3] = '';
       this.infill[3] = '';
       this.bar[4] = 'bar0';
     }

    if(this.screen == 5){
      this.current[4] = 'bar1'
       this.filldash[4] = '';
       this.infill[4] = '';
       this.bar[5] = 'bar0';
     }

    if(this.screen == 6){
      this.current[5] = 'bar1'
       this.filldash[5] = '';
       this.infill[5] = '';
       this.bar[6] = 'bar0';
     }

    if(this.screen == 7){
      this.current[6] = 'bar1'
       this.filldash[6] = '';
       this.infill[6] = '';
       this.bar[7] = 'bar0';
     }

    if(this.screen == 8){
      this.current[7] = 'bar1'
       this.filldash[7] = '';
       this.infill[7] = '';
       this.bar[8] = 'bar0';
     }

  }

  Next(value: number){
    this.screen = value
    
    if(this.screen == 2){
      this.current[1] = 'bar1'
      this.filldash[0] = 'dash';
      this.infill[0] = 'fill';
      this.bar[1] = '';
    }

    if(this.screen == 3){
     this.current[2] = 'bar1'
      this.filldash[1] = 'dash';
      this.infill[1] = 'fill';
      this.bar[2] = '';
    }

    if(this.screen == 4){
     this.current[3] = 'bar1'
      this.filldash[2] = 'dash';
      this.infill[2] = 'fill';
      this.bar[3] = '';
    }

    if(this.screen == 5){
     this.current[4] = 'bar1'
      this.filldash[3] = 'dash';
      this.infill[3] = 'fill';
      this.bar[4] = '';
    }

    if(this.screen == 6){
     this.current[5] = 'bar1'
      this.filldash[4] = 'dash';
      this.infill[4] = 'fill';
      this.bar[5] = '';
    }

    if(this.screen == 7){
     this.current[6] = 'bar1'
      this.filldash[5] = 'dash';
      this.infill[5] = 'fill';
      this.bar[6] = '';
    }

    if(this.screen == 8){
     this.current[7] = 'bar1'
      this.filldash[6] = 'dash';
      this.infill[6] = 'fill';
      this.bar[7] = '';
    }

    if(this.screen == 9){
     this.current[8] = 'bar1'
      this.filldash[7] = 'dash';
      this.infill[7] = 'fill';
      this.bar[8] = '';
    }
  }
}
