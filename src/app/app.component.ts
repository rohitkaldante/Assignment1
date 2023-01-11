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
  if(this.form.value.title !=="" && this.form.value.body !=="") {
    console.log(this.form.value)
    this.api.postData(this.form.value).subscribe((response:any)=>{
      this.responseData.push(response)
      alert("data inserted")
    })
  } else {
    alert("Please enter correct data")
  }
  
}


showForm() {
  this.formStatus = !this.formStatus;
}
}
