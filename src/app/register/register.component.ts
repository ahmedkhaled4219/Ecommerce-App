import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
      password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$")]]
    
    })
    }
    
    handleFormSubmit(){
      console.log(this.registerForm)
  }
}

