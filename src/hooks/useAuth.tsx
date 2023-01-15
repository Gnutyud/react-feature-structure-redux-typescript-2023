import { useEffect, useState } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const fakeAuth = () => {
      return new Promise<{ data: boolean }>((resolve) => {
        setTimeout(() => resolve({ data: true }), 1000);
      });
    };
    fakeAuth().then((res) => setLoggedIn(res.data));
  }, []);

  return loggedIn;
};

export default useAuth;
