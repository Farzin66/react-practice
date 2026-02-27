import React from 'react'
import { useMultiSliceStore } from '../stores/multi-slice-store'

const UserPanel = () => {
    const user = useMultiSliceStore((state) => state.user);
    const login = useMultiSliceStore((state) => state.login);
    const logout = useMultiSliceStore((state) => state.logout);

    const fakeUser = {
      name: "Farzin", 
      age: 38, 
      email: "farzin@example.com", 
    };
    
    
  return (
    <>
      <h1>User Panel</h1>
      <br />
      {user ? (
        <>
          <h2>Username: {user.name}</h2>
          <br />
          <button onClick={logout}>Logout</button>
          <br />
        </>
        ) : (
        <>
          <h2>No user logged in</h2> 
          <button onClick={() => login(fakeUser)}>Login</button>
        </>
        )}   
    </>
  );
}

export default UserPanel