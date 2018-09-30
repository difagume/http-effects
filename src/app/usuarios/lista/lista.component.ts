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

  loading: boolean;
  error: any;
  usuarios: Usuario[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new CargarUsuarios());

    // cargo los usuarios en el html desde el store
    this.store.select('usuarios')
      .subscribe(store => {
        this.usuarios = store.users;
        this.loading = store.loading;
        this.error = store.error;
      });

    // cargo los usuarios desde el servicio
    /* this.usuarioService.getUsers()
      .subscribe(users => this.usuarios = users); */
  }

}
