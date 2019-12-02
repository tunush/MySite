import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('myForm') form:NgForm;

  constructor() { }

  defaultSubject = "opt1";
  isSubmitted = false;
  formData = {};

  onSubmit(form: NgForm) {
    console.log(form);
    this.isSubmitted = true;
    this.formData = form.control.value;
    form.reset();
  }

  addRandEmail() {
    this.form.form.patchValue({
      email: "angular@mail.ru"
    });
  }

}
