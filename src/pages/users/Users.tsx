import ContainerLayout from "../../components/containerLayout/ContainerLayout";
import UserDetails from "../../components/userDetails/UserDetails";
import UserList from "../../components/userList/UserList";
import useUsers from "../../hooks/useUsers";

export default function Users() {

    const { updatedUsersList, selectedUserDetails, isLoadingUserList, error, handleSelectUser } = useUsers();

    if (error.length) {
        return <div> {error} </div>;
    }

    if (isLoadingUserList) {
        return <div>Loading...</div>;
    }

    return (
        <ContainerLayout>
            {updatedUsersList?.length ? (
                <UserList users={updatedUsersList} onSelectUser={handleSelectUser} />
            ) : (
                <p>No users found.</p>
            )}<>
                {selectedUserDetails && (
                    <UserDetails user={selectedUserDetails} />
                )}
            </>
        </ContainerLayout>
    );
}

