import { useEffect } from "react";
import { fetchUsers, fetchUserDetails } from "./userSlice";

export default function Users() {
  const { users, selectedUser, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log('users', error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSelectUser = (user) => {
    dispatch(fetchUserDetails(user.oid));
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ContainerLayout>
      {users?.length ? (
        <UserList users={users} onSelectUser={handleSelectUser} />
      ) : (
        <p>No users found.</p>
      )}
      {selectedUser && <UserDetails user={selectedUser} />}
    </ContainerLayout>
  );
}
