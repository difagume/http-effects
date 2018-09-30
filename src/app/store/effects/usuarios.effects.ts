import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CARGAR_USUARIOS } from '../actions';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    cargarUsuarios$ = this.actions$.ofType(CARGAR_USUARIOS);

}
