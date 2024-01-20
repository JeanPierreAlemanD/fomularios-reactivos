import { ValidatorsService } from './../../../shared/servicios/validators.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorsService } from 'src/app/shared/validators/email-validators.service';
// import * as custonValidators from 'src/app/shared/validators/validators-function';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [new EmailValidatorsService]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)], [this.emailValidator]],
    // username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]

  }, {
    Validators: [
      this.validatorsService.isFieldOneEqualFielTwo('password', 'password2')
    ]
  })

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidatorsService
  ) { }

  ngOnInit(): void {

  }


  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field)
    //  TODO:
  }


  onSubmit() {
    this.myForm.markAllAsTouched();
  }

}
