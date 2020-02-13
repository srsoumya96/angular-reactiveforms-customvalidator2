import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { MustMatch } from "../my-validator.validator";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpVals = {
    "email" : '',
    "password" : '',
    "gender" : '',
    "accepted" : ''
  }
  constructor(private formbuilder: FormBuilder) {
    this.signUpForm = this.formbuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        password: [
          "",
          [ Validators.required,
            Validators.pattern(
              "(?=.*[@#$_])(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{8,15}"
            )
          ]
        ],
        cnfrmpassword: ["", Validators.required],
        gender: ["",[Validators.required]],
        accepted: false
      },
      { validator: MustMatch("password", "cnfrmpassword") }
    );
  }

  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {}

  onSubmit() {
    this.signUpVals.email = this.f.email.value;
    this.signUpVals.password = this.f.password.value;
    this.signUpVals.gender = this.f.gender.value;
    this.f.accepted.value == true ? this.signUpVals.accepted = 'Yes' : this.signUpVals.accepted ='No';

    console.log("Email ID : " +this.signUpVals.email);
    console.log("Password : " +this.signUpVals.password);
    console.log("Gender : " +this.signUpVals.gender);
    console.log("Do you accept the terms and conditions? : " +this.signUpVals.accepted);
}
}
