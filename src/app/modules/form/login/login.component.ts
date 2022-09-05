import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../pages/common.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: any;
  minSize = 5;
  infoMessage = '';
  invalidLogin = true;
  loginErrorMessage: any;
  loginData: any;
  token: any;
  infoMessageRegister: string;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private commonService: CommonService,
              private formService: FormService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('params : ' , params);
      if(params.registered !== undefined && params.registered === 'true') {
        alert(this.infoMessage = 'Registration Successful! Please Login!')
        this.infoMessageRegister = 'User Registered Successfully!';
        this.infoMessage = 'Credential sent on your mail';
        this.router.navigate(['form/login']);
    } 
    })

    this.loginForm = this.formBuilder.group({
      usernameOrEmail: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["", [Validators.required]]
    })
  }

  public errorHandling = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  submit() {
    if(!this.loginForm.valid) {
      return;
    } else {
      console.log('loginForm : ' , this.loginForm.value);
      this.formService.userLogin(this.loginForm.value).subscribe(data => {
        console.log('data : ' , data);
        this.loginData = data;
        let roles = this.loginData.roles[0].name;
        console.log('roles : ' , roles);
        // this.commonService.setRoles(roles);
        sessionStorage.setItem('role', roles)
        this.token = data['bearerToken'];
        console.log('token : ' , this.token);
        localStorage.setItem('bearerToken', this.token)
        

        console.log('user login successfully!');
        this.commonService.setUserData(this.loginData);
        this.router.navigate(['pages/user-view']);
      }, (error) => {
        console.log('error : ' , error);
        alert(error.error.message)
        this.loginErrorMessage = error.error.message;
      })
    }
    
  }

}
