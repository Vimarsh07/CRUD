import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  name:any;
  roll:any;

  id:any;
  nam:any;

  constructor(public navCtrl: NavController, private http:HttpClient ) {
    this.http.get('http://localhost:8081/read').subscribe(data=>{
      this.items=data;
      

    })
    

  }

  add(){
    console.log(this.name);
    var body ={
      name:this.name,
    }
    this.http.post('http://localhost:8081/insert',body).subscribe(data=>{
    console.log(data); 
    })
  }

  delete(){
    console.log(this.roll);
    var body={
      id:this.roll,

    }
    this.http.post('http://localhost:8081/delete',body).subscribe(data=>{
      console.log(data);
    })
  }

  update(){
    console.log(this.id+this.nam);
    var body={
      roll:this.id,
      nam:this.nam,

    }
    this.http.post('http://localhost:8081/update',body).subscribe(data=>{
      console.log(data);
    })
  }

}
