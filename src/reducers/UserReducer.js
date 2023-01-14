export const initialState = {
    token: "",
    nome: "",
    bills: []
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setToken': 
            return { ...state, nome: action.payload.token}
        case 'setNome':
            return { ...state, nome: action.payload.nome};
        default: return state;
    }
}