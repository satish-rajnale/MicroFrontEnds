import { BehaviorSubject } from 'rxjs';
import { useState, useEffect } from 'react';
const API_SERVER = 'http://localhost:4000';

export const jwt = new BehaviorSubject(null);

export const login = (username, password) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);

      return data.access_token;
    });

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    return jwt.subscribe((c) => {
      setLoggedIn(!!jwt.value);
    });
  }, []);
  return loggedIn;
}
