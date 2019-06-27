import React, { useState } from 'react';
import { MainStore } from '../context/mainContext';

export default () => {
  const [greeting, setGreeting] = useState('Hello World!!!!!!!!');

  return (
    <div>
      { greeting }
    </div>
  );
};
