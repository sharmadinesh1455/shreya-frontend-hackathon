import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from 'src/Models/data';
import { UploadDataService } from '../services/upload-data.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private uploadDataSercvice : UploadDataService){

  }

  reimbursementFor: any;
  category: any;
  name : any;
  var : any 
  geid : any ;
  subscriptoins = [];
  anotherPersonName : any ;
  anotherPersonGeid : any
  file : any;

  data : Data = new Data();

  ngOnInit(): void {
  }

  nextStep(userForm: NgForm) {
    
    this.data.name = userForm.form.value.name;
    this.data.GEID = userForm.form.value.geid;
    this.data.reimbursementFor = userForm.form.value.reimbursementFor;
    this.data.anotherPersonGeid = userForm.form.value.anotherPersonGeid;
    this.data.anotherPersonName = userForm.form.value.anotherPersonName;
    this.data.category = userForm.form.value.category;

    console.log(this.data);
    

    document.querySelector('.main-div')?.classList.add('alignForms');
    document.getElementById('step2')?.classList.remove('hidden');
  }


  submitForm(fileData : NgForm) {

    // this.data.file = this.file;
    // console.log(this.data);
    

    // Create a FormData object to send files with the request
    var formData = new FormData();
    formData.append("uploadData", JSON.stringify(this.data));    
    formData.append("file", this.data.file); // Assuming only one file is selected

    console.log("FormData" , formData.forEach( data => {
      console.log(data);
    }));

    this.uploadDataSercvice.uploadData(formData).subscribe(
      dta => {
        console.log("Dataaa :: ", dta);
      }
    )
    
    // Send a POST request to your Spring Boot backend

}

  toggleAnotherPersonBlock(newValue: any) {
    
    let anotherPersonBlock = document.querySelector('#anotherPersonBlock');
    if (newValue === "other") {
      anotherPersonBlock?.classList.remove('self-form'); 
      anotherPersonBlock?.classList.add('other-form');    
    }
    else {
      anotherPersonBlock?.classList.remove('other-form')    
      anotherPersonBlock?.classList.add('self-form') 
    }
  }

  selectedCategory(newValue: any) {

  }

  selectedFile(Event : any){
    this.file = Event.target.files[0];
    this.data.file = this.file
    console.log("File", this.file);
  }

}
