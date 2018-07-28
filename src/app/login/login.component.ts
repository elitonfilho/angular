import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ttt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: '',
      password: ''
    })
  }

  entrar() {
    const { user, password } = this.loginForm.value
    this.authService.fazerLogin(user, password).subscribe(
      data => {
        if (data) {
          alert('Login realizado com sucesso')
        } else {
          alert('Usuário ou senha inválidos')
        }
      })
  }
}
