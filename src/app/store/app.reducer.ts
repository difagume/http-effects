import { ActionReducerMap } from '@ngrx/store';
import { usuarioReducer, usuariosReducer, UsuariosState, UsuarioState } from './reducers';

export interface AppState {
    usuarios: UsuariosState;
    usuario: UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer,
    usuario: usuarioReducer
};
