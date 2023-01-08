export const initialState = {
    nome: "",
    bills: []
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setNome':
            return { ...state, nome: action.payload.nome};
            break;
        default: return state;
    }
}