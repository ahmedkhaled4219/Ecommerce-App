import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup

  constructor(private fb : FormBuilder){
    this.registerForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      username:['',[Validators.required,Validators.pattern("^\S+$")]],
      password:['',[Validators.required,this.passwordValidator()]],
      confirm:['',[Validators.required,this.confirmPasswordValidator('password')]]
    })
    }
    
    handleFormSubmit(){
      console.log(this.registerForm)
  }


 passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.value;
    const isLengthValid = password.length >= 8;
    const containsLowerCase = /[a-z]/.test(password);
    const containsUpperCase = /[A-Z]/.test(password);
    const containsDigit = /\d/.test(password);
    const containsSpecialChar = /[@*%$#]/.test(password);
    const isValid =
      isLengthValid &&
      containsLowerCase &&
      containsUpperCase &&
      containsDigit &&
      containsSpecialChar;
    return isValid ? null : { 'passwordRequirements': true };
  };
}

confirmPasswordValidator(passwordControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.value;
    const passwordControl = control.parent?.get(passwordControlName);

    return password === passwordControl?.value ? null : { 'passwordMismatch': true };
  };

}
}
