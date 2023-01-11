import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
 formStatus:boolean = false;
 responseData:any;

  form = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private api :ApiService) { 

  }
  ngOnInit(): void {
    this.fetctUser()
  }

  fetctUser() {
      this.api.getData().subscribe((response)=>{
        this.responseData = response
      })
  }

  

onSubmit() {
  this.api.postData(this.form.value).subscribe((response:any)=>{
    this.responseData.push(this.form.value)
    alert("data inserted")
  })
  
}
showForm() {
  this.formStatus = !this.formStatus;
}
}
