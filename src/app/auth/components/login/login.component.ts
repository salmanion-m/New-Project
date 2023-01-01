import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services";
import {Subscription} from "rxjs";

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
      this.router.navigate(['/letter'])
    })
  }


}
