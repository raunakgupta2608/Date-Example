import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  d:string;
  valid:boolean= true;
  private arr:string []; 

  onKeyUp(date){
    this.d =  date;
    this.arr = this.d.split("/");
    
    
    if(this.arr[2].length==2 || this.arr[2].length==4 ){
      if(this.arr[2].length!=4){
        this.arr[2] = "20"+this.arr[2];
        this.d = this.arr[0] +"/"+ this.arr[1] +"/"+ this.arr[2]; 
      }
    }
    else{
      this.valid= false;
    }
  }
}
