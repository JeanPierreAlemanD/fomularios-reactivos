import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotification: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldErrors(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return "Estes campo es requerido";

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters`;
;
      }
    }
    return 'null'
  }


  onSave() {

    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset()

  }

}
