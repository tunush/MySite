import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myForm : FormGroup = new FormGroup({
    "userName": new FormControl("", [Validators.required]),
    "userNickname" : new FormControl("", [Validators.required], [this.checkNickname]),
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
    this.myForm.reset();
  }

  checkLengthMessage(control: FormControl) {
    if (control.value.length <= 8) {
      return {lengthMessage : true};
    }
    return null;
  }

  checkNickname(control: FormControl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "nick") {
            resolve({isCorrectNickname:true});
        }
        else {
          resolve(null);
        }
      }, 3000);
    });
  }

}
