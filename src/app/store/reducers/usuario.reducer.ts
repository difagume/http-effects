import { Usuario } from '../../models/usuario.model';
import { CARGAR_USUARIO, CARGAR_USUARIO_FAIL, CARGAR_USUARIO_SUCCESS, usuarioAcciones } from '../actions';

export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer(state = estadoInicial, action: usuarioAcciones): UsuarioState {
    switch (action.type) {
        case CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                user: { ...action.usuario }
            };

        case CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                user: null,
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
