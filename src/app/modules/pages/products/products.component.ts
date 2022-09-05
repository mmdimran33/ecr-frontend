import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  myImage!: Observable<any>;

  base64code!: any;

  ngOnInit(): void {
  }

  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    console.log('target : ' , target);
    
    const file: File = (target.files as FileList)[0];
    console.log('file : ' , file);
   
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    console.log('filessss : ' , file);
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    console.log('observable : ' , observable);  
    
    observable.subscribe((d) => {
      console.log('d : ' , d); 
      this.myImage = d;
       
      // this.myImage = d.split("base64,")[1];
      // console.log('myImage : ' , this.myImage);

      // var strImage = d.split(',')[1];
      // console.log('strImage : ' , strImage);
      
      this.base64code = d;     
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    console.log('filereader : ' , filereader);
    
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete()
    }

    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }

}
