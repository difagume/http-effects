import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CargarUsuario } from '../../store/actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params
      .subscribe(params => {

        const id = params['id'];
        this.store.dispatch(new CargarUsuario(id));
      });
  }

}
