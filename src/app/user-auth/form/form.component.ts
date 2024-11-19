import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Validation from 'src/app/utils/validations';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  // template forms
  formData: any = {};
  getFormData(form: NgForm) {
    console.log(form);
    this.formData = form;
  }


  // reactive forms
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), ]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

   loginUser() {
    console.log(this.loginForm.value);
  }
  
  // for validations 
  get name() {
    return this.loginForm.get('name');
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }



 
}




// export class FormComponent implements OnInit {
//   form: FormGroup = new FormGroup({});
//   submitted = false;

//   genders = ['Male', 'Female', 'Other']; // Radio options
//   countries = ['India', 'USA', 'UK', 'Canada']; // Dropdown options

//   constructor(private formBuilder: FormBuilder) {}

//   ngOnInit(): void {
//     this.form = this.formBuilder.group(
//       {
//         fullname: ['', Validators.required],
//         username: [
//           '',
//           [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
//         ],
//         email: ['', [Validators.required, Validators.email]],
//         password: [
//           '',
//           [Validators.required, Validators.minLength(6), Validators.maxLength(40)],
//         ],
//         confirmPassword: ['', Validators.required],
//         acceptTerms: [false, Validators.requiredTrue],
//         gender: ['', Validators.required], // Radio button control
//         country: ['', Validators.required], // Dropdown control
//         preferences: this.formBuilder.group({
//           newsletters: [false],
//           updates: [false],
//           promotions: [false],
//         }), // Checkbox group
//       },
//       {
//         validators: this.matchPasswords('password', 'confirmPassword'),
//       }
//     );
//   }

//   // Custom validator for password matching
//   matchPasswords(controlName: string, matchingControlName: string) {
//     return (group: FormGroup) => {
//       const control = group.controls[controlName];
//       const matchingControl = group.controls[matchingControlName];

//       if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
//         return;
//       }

//       if (control.value !== matchingControl.value) {
//         matchingControl.setErrors({ mustMatch: true });
//       } else {
//         matchingControl.setErrors(null);
//       }
//     };
//   }

//   get f(): { [key: string]: AbstractControl } {
//     return this.form.controls;
//   }

//   onSubmit(): void {
//     this.submitted = true;

//     if (this.form.invalid) {
//       return;
//     }

//     console.log(JSON.stringify(this.form.value, null, 2));
//   }

//   onReset(): void {
//     this.submitted = false;
//     this.form.reset();
//   }
// }
