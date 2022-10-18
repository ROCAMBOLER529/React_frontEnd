/*
  Extensiones:
  Simple React Snippets
  ES7 + React/Redux/React-Native

  <></> = <fragment></fragment> ==> propio de React para evadir el import y no contaminar con <div>s
*/

import React from 'react'
import { FormSaludo } from './FormSaludo';



const App = () => {
  return (
    <>
    <h1>Saludador con React</h1>
    <FormSaludo />
    </>    
  );
};

export default App