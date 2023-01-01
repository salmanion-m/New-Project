import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fieldRequired: string = "This field is required"
  hide = true;
  loading = false;



  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this._createForm();
  }

   private _createForm(){
    this.registerForm = this.fb.group({
      userName: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    })
   }

  register(){
    console.log(this.registerForm.value)
    if(this.registerForm.invalid){
      return
    }
    this.loading = true;
    this.authService.registers(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/letter'])
    })
  }

}
