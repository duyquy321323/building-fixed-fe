export const login = (userData) => {
    return {
        type: "LOGIN",
        userData: userData,
    };
}

export const logout = () => {
    return {
        type: "LOGOUT"
    };
}

export const optionPage = (page) => {
    return {
        type: "CHANGEPAGENUMBER",
        pageNumber: page,
    };
}

export const optionSelect = (select) => {
    return{
        type: "SELECT",
        value: select,
    };
}