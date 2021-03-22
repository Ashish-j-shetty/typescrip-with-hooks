import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>First:{user.firstName}</div>
      <div>last:{user.lastName}</div>
    </div>
  );
}

export default function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: "Ashish",
    lastName: "Shetty",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            firstName: "Aj",
            lastName: "Shetty",
          })
        }
      >
        Chnage context
      </button>
    </UserContext.Provider>
  );
}
