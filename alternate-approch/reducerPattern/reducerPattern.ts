import { useEffect, useMemo, useReducer } from "react";

const initialState = {
    users: [],
    selectedUser: null,
    isLoadingUserList: true,
    error: "",
};

export default function usersReducer(state: any, action: { type: string; payload?: any; }) {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
                isLoadingUserList: false,
            };
        case "SET_SELECTED_USER":
            return {
                ...state,
                selectedUser: action.payload,
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
                isLoadingUserList: false,
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoadingUserList: true,
            };
        default:
            return state;
    }
}

export const useUsers = () => {
    const [state, dispatch] = useReducer(usersReducer, initialState);
    useEffect(() => {
        loadAllUsers()
            .then((users) => {
                dispatch({ type: "SET_USERS", payload: users });
            })
            .catch((error) => {
                dispatch({ type: "SET_ERROR", payload: error.message });
            });
    }, []);

    async function handleSelectUser(user: { oid: number; }) {
        try {
            const userDetails = await loadUserDetails(user.oid);
            dispatch({ type: "SET_SELECTED_USER", payload: userDetails });
        } catch (error: any) {
            console.error(error);
            dispatch({ type: "SET_ERROR", payload: error?.message });
        }
    }

    const updatedUsersList = useMemo(() => {
        return state.users.map((user: any) => {
            const updatedUser = { ...user };
            updatedUser.enabled = updatedUser.enabled ? "Yes" : "No";
            updatedUser.lastLogon = formatDate(user?.lastLogon);
            return updatedUser;
        });
    }, [state.users]);

    return { updatedUsersList, selectedUser: state.selectedUser, isLoadingUserList: state.isLoadingUserList, error: state.error, handleSelectUser };

