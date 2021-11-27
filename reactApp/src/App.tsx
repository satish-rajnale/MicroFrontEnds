import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore
// import CounterWrapper from 'remote/CounterWrapper';
import { useClient } from './host';
import './index.scss';

const App = () => {
  const { login, logout, JWT, getTodos } = useClient();

  const [name, setName] = useState('sally');
  const [password, setPassword] = useState('123');
  const [todos, setTodos] = useState([]);

  const onLogin = useCallback(async () => {
    login(name, password);
  }, [name, password]);
  const divRef = useRef();

  const onGetTodos = useCallback(async () => {
    // queryClient.invalidateQueries('todos');
    setTodos(await getTodos());
  }, [getTodos]);
  // useEffect(() => {
  //   CounterWrapper(divRef.current);
  // }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: microFE</div>
      {/* <div ref={divRef}></div>{' '} */}
      <div className="grid grid-cols-2 gap-5">
        <div>
          {JWT ? (
            <button
              onClick={logout}
              className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-xl"
            >
              Logout
            </button>
          ) : (
            <>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full rounded-xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="password"
                className="border border-gray-400 p-2 w-full rounded-xl mt-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={onLogin}
                className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-xl"
              >
                Login
              </button>
            </>
          )}
        </div>{' '}
        <div>
          {JWT && todos && (
            <>
              <div>
                {todos.map((todo) => (
                  <div key={todo}>{todo}</div>
                ))}
              </div>
              <div className="mt-10">
                <button
                  onClick={onGetTodos}
                  className="px-5 py-2 bg-blue-600 text-white rounded-xl"
                >
                  Get Todos
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
