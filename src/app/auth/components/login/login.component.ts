import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services";
import {Login} from "../../models";
import {first, Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  subscription: Subscription[] = [];


  constructor(private fb: FormBuilder,
              private router : Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }


  onSubmit( ){
    if(this.loginForm.invalid){
      return
    }
    this.authService.Login(this.loginForm.value).subscribe((response: any)=> {
      // console.log('1',response);
      // const token = response.token;
      // localStorage.setItem('token', response.token)
      // console.log('2',response.token)
      this.router.navigate(['/letter'])
    })
  }

  // onSubmit( ){
  //   if(this.loginForm.invalid){
  //     return
  //   }
  //   this.authService.Login(this.loginForm.value).subscribe((res)=> {
  //     if (res) {
  //       localStorage.setItem('token', res.token)
  //       this.router.navigate(['/letter'])
  //     }
  //   })
  // }






}
