export const UPDATE_USER = 'UPDATE_USER';


const initialState = {
    language: 'en',
    theme: 'light',
    isAuthorized: false
};


export const rdUser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }


};
