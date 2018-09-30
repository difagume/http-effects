import { Usuario } from '../../models/usuario.model';
import { CARGAR_USUARIOS, usuariosAcciones, CARGAR_USUARIOS_SUCCESS, CARGAR_USUARIOS_FAIL } from '../actions';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function usuariosReducer(state = estadoInicial, action: usuariosAcciones): UsuariosState {
    switch (action.type) {
        case CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                users: [...action.usuarios]
            };

        case CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                users: [],
                error: {
                    status: action.payload.status,
                    url: action.payload.url,
                    message: action.payload.message
                }
                // error: action.payload
            };

        default:
            return state;
    }
}
