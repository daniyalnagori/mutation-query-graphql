import React, { createRef } from 'react';
import './App.css';
import { useMutation, useQuery } from "@apollo/client"
import { createMessageMutation, getAllMessages  } from "./gqlSchema"

function App() {
  const messageValue = createRef()
  const [addMessage] = useMutation(createMessageMutation);
  let { data, error, loading} = useQuery(getAllMessages)
  // console.log('data',data,"error",error)

  const submit = () => {
    let message = messageValue.current.value;
    addMessage({ variables: { data: { message } } })
    .then(data=>{
      console.log('response',data)
    }).catch(error=>{
      console.log("errorr",error)
    })
  }

  return (
    <div className="App">
      <input ref={messageValue} placeholder="message" />
      <button onClick={submit}>add</button>
    </div>
  );
}

export default App;
