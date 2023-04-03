import { UserContext } from "./UserContext";
import { useState } from "react";

// const user = {
//     email: "pabonlopez@example.com",
//     id: 1,
//     name: "Sebastian Pabon Lopez"
// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}