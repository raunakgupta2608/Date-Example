import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dateChange'
})
export class PipeDate implements PipeTransform{
    private d:string;
    private arr:string []; 

    transform(value:string, args?:any){
        if(!value)
            return null;
        
        this.d = value;
        this.arr = value.split("/");
        console.log(this.arr);

        if(this.arr[2].length!=4){
            this.arr[2] = "20"+this.arr[2];

            this.d = this.arr[0] +"/"+ this.arr[1] +"/"+ this.arr[2]; 
            console.log(this.d);
        }
        return this.d;
    }
}