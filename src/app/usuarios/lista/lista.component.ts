import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    // private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    /* this.usuarioService.getUsers()
      .subscribe(users => this.usuarios = users); */
  }

}
