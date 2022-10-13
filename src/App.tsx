import React from 'react';
import { useState } from 'react';

import './App.css';

const App: React.FC = () => {

    interface UserInt {
      name: string,
      age: string,
      job: string,
    }
  
    const [userState, setUserState] = useState<{currentUser: UserInt }>({
      currentUser: {
        name: "",
        age: "",
        job: ""
      }
    })

  return (
   <div className='container'>
    <h1>React with Typescript</h1>
    <form>
      <label htmlFor="userName">Name:</label>
      <input 
        id="userName"
        type="text"
        name="name"
        value=""
      />
      <label htmlFor="userAge">Age:</label>
      <input 
        id="userAge"
        type="number"
        name="age"
        value=""
        onChange={onChangeHandler}
      /> 
      <label htmlFor="userJob">Job:</label>
      <input 
        id="userJob"
        type="text"
        name="job"
        value=""
      />

      <button type='submit'>Add user</button>
    </form>
   </div>
  );
}

export default App;
