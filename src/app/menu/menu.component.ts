import { Component, OnInit } from '@angular/core';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Atributos
  public miToken: number;
  public nombreUsuario: string | null;

  constructor(private tokenService: TokenService) {
    this.miToken = 0;
    this.nombreUsuario = '';
  }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  private cargarUsuario(): void {
    if (localStorage.getItem('nombreUsuario')) {
      this.nombreUsuario = localStorage.getItem('nombreUsuario');
    }

    this.tokenService.token$.subscribe( (data: number) => { this.miToken = data; })
  }
}
