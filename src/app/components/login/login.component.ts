import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginData = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService,
    private router:Router,
    private alertService:AlertService
  ) {}

  onLogin() {
    this.loginService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Login success', res);
        
        // store token (later JWT)
        localStorage.setItem('token', res.data);

        // redirect (we’ll add later)
        this.router.navigate(['/dashboard']);
      }
    });
  }

  showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}
}
