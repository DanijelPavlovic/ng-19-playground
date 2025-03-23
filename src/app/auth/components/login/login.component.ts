import {Component, inject, OnInit} from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Message} from 'primeng/message';
import {NgClass, NgIf} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    Card,
    Button,
    InputGroup,
    InputGroupAddon,
    InputText,
    ReactiveFormsModule,
    Message,
    NgIf,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  authService: AuthService = inject(AuthService)
  fb: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);


  ngOnInit() {
    const token = this.authService.getToken()
    if (token) {
      this.router.navigateByUrl('dashboard')
    }
  }

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  login(): void {
    this.authService.login(this.form.value);
  }
}
