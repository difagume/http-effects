import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { CargarUsuario, CargarUsuarioFail, CargarUsuarioSuccess, CARGAR_USUARIO } from '../actions';

@Injectable()
export class UsuarioEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) { }

    @Effect()
    cargarUsuario$ = this.actions$.ofType(CARGAR_USUARIO)
        .pipe(
            switchMap((accion: CargarUsuario) => {
                return this.usuarioService.getUserById(accion.id)
                    .pipe(
                        map(user => new CargarUsuarioSuccess(user)),
                        catchError(error => of(new CargarUsuarioFail(error)))
                    );
            })
        );

}
