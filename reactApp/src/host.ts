import { useCallback } from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import axios from 'axios';

const { useGlobalState, getGlobalState, setGlobalState } = createGlobalState({
  jwtToken: '',
});

const getJwtToken = () => getGlobalState('jwtToken');
const setJwtToken = (value: string) => setGlobalState('jwtToken', value);
const useJwtToken = () => useGlobalState('jwtToken');

const client = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (config) => {
    console.log(getJwtToken());
    config.headers['x-access-token'] = getJwtToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useClient = () => {
  const [JWT, setJWT] = useJwtToken();

  const login = useCallback((name: string, password: string) => {
    client
      .post(
        '/',
        {
          query:
            'mutation ($name: String!, $password: String!) {\n  authenticate(name: $name, password: $password)\n}\n',
          variables: { name, password },
        },
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        const jwtToken = (
          data as {
            data: {
              authenticate: string;
            };
          }
        ).data.authenticate;
        setJWT(jwtToken);
      });
  }, []);
  const logout = useCallback(() => {
    setJWT('');
  }, []);
  return {
    JWT,

    login,
    logout,
  };
};
