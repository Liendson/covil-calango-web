import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioDTO } from 'src/app/model/usuario.dto';
import { LoginDTO } from 'src/app/model/login.dto';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private urlController = `${environment.url}/api/auth`;

  constructor(private httpClient: HttpClient) { }

  login(body: LoginDTO) {
    return this.httpClient.post<UsuarioDTO>(`${this.urlController}/login`, body);
  }

}
