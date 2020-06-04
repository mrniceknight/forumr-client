import React, { useState } from 'react';
import Login from './Authentication/Login';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);
  return (
    <Login setCurrentUser={setCurrentUser} />
  );
}
