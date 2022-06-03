import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/shared/classes/usuario';
import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Atributos
  public usuario: Usuario

  constructor(
    private loginService: LoginService,
    private router: Router,
    private tokenService: TokenService) {
    this.usuario = new Usuario();
  }

  public submit(): void {

    this.loginService.login(this.usuario).subscribe(
      (data: number) => {
        this.tokenService.setToken(data);
        //localStorage.setItem('tokenUsuario', this.usuario.token);
        localStorage.setItem('nombreUsuario', this.usuario.nombre);
        this.router.navigate(['/listado']);
      },
      (error: Error) => {
        console.error("Error al realizar el acceso");
      }
    )
  }

}
