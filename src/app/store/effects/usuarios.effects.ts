import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { CargarUsuariosFail, CargarUsuariosSuccess, CARGAR_USUARIOS } from '../actions';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) { }

    @Effect()
    cargarUsuarios$ = this.actions$.ofType(CARGAR_USUARIOS)
        .pipe(
            switchMap(() => {
                return this.usuarioService.getUsers()
                    .pipe(
                        map(users => new CargarUsuariosSuccess(users)),
                        catchError(error => of(new CargarUsuariosFail(error)))
                    );
            })
        );

}
