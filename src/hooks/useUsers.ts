import { useEffect, useMemo, useState } from "react";
import { loadAllUsers, loadUserDetails } from "../api/userDetailsServices";
import { userDetails, userList } from "../types/userTypes";
import { formatDate } from "../utils/formatDate";

const useUsers = () => {
    const [users, setUsers] = useState<userList[]>([]);
    const [selectedUserDetails, setSelectedUserDetails] = useState<userDetails | null>(null);
    const [isLoadingUserList, setIsLoadingUserList] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // const timer = setTimeout(() => {
        loadAllUsers()
            .then((users) => {
                setUsers(users);
            })
            .catch((error) => {
                setError(`${error}`);
            })
            .finally(() => {
                setIsLoadingUserList(false);
            });
        // }, 300);
        // return () => clearTimeout(timer);
    }, []);

    async function handleSelectUser(user: userList) {
        try {
            const userDetails = await loadUserDetails(user.oid);
            setSelectedUserDetails(userDetails);
        } catch (error) {
            console.error(error);
            setError(`${error}`);
        }
    }

    const updatedUsersList = useMemo(() => {
        return users.map((user: userList) => {
            const updatedUser = { ...user };
            updatedUser.enabled = updatedUser.enabled ? 'Yes' : 'No';
            updatedUser.lastLogon = formatDate(user?.lastLogon);
            return updatedUser;
        });
    }, [users]);

    return { updatedUsersList, selectedUserDetails, isLoadingUserList, error, handleSelectUser };
};


export default useUsers;