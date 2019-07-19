import React, { useState } from 'react';

const Context = React.createContext({});

export const MainStore = (props) => {
  const [greeting, setGreeting] = useState('Hello World!');


  return (
    <Context.Provider value={{
      greeting,
      setGreeting,
    }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
