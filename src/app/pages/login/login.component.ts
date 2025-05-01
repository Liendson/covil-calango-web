import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/http-services/auth.service';
import { TipoProviderAuthEnum } from 'src/app/enums/tipo-provider-auth.enum';
import { SocialUser } from 'angularx-social-login';
import { UserStateService } from 'src/app/services/user.service';
import { UsuarioDTO } from 'src/app/model/usuario.dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleSigninButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    senha: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private googleSigninService: SocialAuthService,
    private authService: AuthService,
    private userStateService: UserStateService
  ) { }

  ngOnInit(): void {
    this.googleSigninService.authState.subscribe(user => this.loginGoogle(user));
  }

  loginGoogle(user: SocialUser) {
    this.authService.login({
      id: user.id,
      email: user.email,
      idToken: user.idToken,
      provider: TipoProviderAuthEnum.GOOGLE
    }).subscribe((res) => this.mapearRetorno(res));
  }

  loginCredentials() {
    if (this.form.valid) {
      this.authService.login({
        email: this.form.get('email')?.value!,
        senha: this.form.get('senha')?.value!,
        provider: TipoProviderAuthEnum.CREDENTIAL
      }).subscribe((res) => this.mapearRetorno(res));
    }
  }

  mapearRetorno(res: UsuarioDTO) {
    if (res) {
      this.userStateService.setCurrentUser(res);
      this.router.navigate(['/dashboard']);
    }
  }

}
