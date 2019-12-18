import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myForm : FormGroup = new FormGroup({
             
    "userName": new FormControl("", [Validators.required], [this.checkName]),
    "userEmail": new FormControl("", [
                Validators.required, 
                Validators.email
    ]),
    "subject": new FormControl("", []),
    "message": new FormControl("", [Validators.required, this.checkLengthMessage])
  });

  constructor(){}

  onSubmit() {
    console.log(this.myForm);
  }

  checkLengthMessage(control: FormControl) {
    let lengthMessage;
    if (control.value.length <= 8) {
      return {lengthMessage : true};
    }
    return {lengthMessage : null};
  }

  checkName(control: FormControl) {
    let isCorrectName;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "Tatevik") {
            resolve({isCorrectName:true});
        }
        resolve({isCorrectName:null});
      }, 3000);
    });
  }

}
