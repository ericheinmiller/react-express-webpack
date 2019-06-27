import React, { useState } from 'react';

const Context = React.createContext({});

export const MainStore = (props) => {
  const [word, setWord] = useState('');


  return (
    <Context.Provider value={{
      word,
    }}
    >
    {props.children}
    </Context.Provider>
  );
};

export default Context;
