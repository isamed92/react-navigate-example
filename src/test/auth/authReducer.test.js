import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en el auth reducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('debe autenticar y colocar el "name" del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'isaias',
      },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({ logged: true, name: 'isaias' });
  });

  test('debe de borrar el name del usuario y log en false', () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, name: 'isaias' }, action);

    expect(state).toEqual({ logged: false });
  });
});
