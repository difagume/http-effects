import { ActionReducerMap } from '@ngrx/store';
import { usuariosReducer, UsuariosState } from './reducers';

export interface AppState {
    usuarios: UsuariosState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
};
