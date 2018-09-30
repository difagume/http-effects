import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import { CargarUsuarios } from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CargarUsuarios());
    /* this.usuarioService.getUsers()
      .subscribe(users => this.usuarios = users); */
  }

}
