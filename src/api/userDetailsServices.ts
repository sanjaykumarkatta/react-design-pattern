console.log(import.meta.env);
export const loadAllUsers = async () => {
  const response = await fetch(
    `json/AllUsers.json`
  );
  const data = await response.json();
  return data;
}

export const loadUserDetails = async (userId: number) => {
  const response = await fetch(
    `json/User${userId}.json`
  );
  const data = await response.json();
  return data;
};