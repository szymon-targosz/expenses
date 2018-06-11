import authReducer from '../../reducers/auth';

test('should setup default auth values', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set uid value', () => {
    const action = { type: 'LOGIN', uid: '11001000111101' };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: action.uid
    });
});

test('should clear uid value', () => {
    const state = authReducer({ uid: '1234wert' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});