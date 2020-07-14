const CHANGE_TIME_THEME = 'CHANGE_TIME_THEME';
const SET_THEME_IN_LS = 'SET_THEME_IN_LS';
const GET_THEME_IN_LS = 'GET_THEME_IN_LS';

const initialState = {
    isDark: false,
    isInitialized: false,
    isLoading: false,
};

const settingReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TIME_THEME: {
            let newValue = !state.isDark;
            return {...state, isDark: newValue};
        }
        case SET_THEME_IN_LS: {
            return {
                ...state, isDark: action.isDark
            };
        }
        default:
            return state;
    }
};

const changeThemeInRedux = () => {
    return {type: CHANGE_TIME_THEME};
};

export const changeTheme = (isDark) => {
    return (dispatch) =>  {
        dispatch(changeThemeInRedux());
        localStorage.setItem('isDark', !isDark);
    };
};

export const initialalizeApp = () => {
    return (dispatch) => {
        let isDarkFromLS = localStorage.getItem('isDark');
        if (isDarkFromLS === 'true') {
            isDarkFromLS = true;
        } else {
            isDarkFromLS = false;
        }
        dispatch(setThemeInLocalStorage(isDarkFromLS));
    };
};

const setThemeInLocalStorage = (isDark) => {
    return {type: SET_THEME_IN_LS, isDark};
};
// const getThemeInLocalStorage = () => {
//     return {type: GET_THEME_IN_LS};
// };


export default settingReducer;
