import React from 'react';
import { useState } from 'react';

import './App.css';

const App: React.FC = () => {

    interface UserInt {
      name: string;
      age: string;
      job: string;
    }
    
    interface allUsersInt{
      currentUser: UserInt;
      allUsers: Array<UserInt>;
    }

    const [userState, setUserState] = useState<allUsersInt>({
      currentUser: {
        name: "",
        age: "",
        job: ""
      },
      allUsers:[]
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
      // console.log(e.target.value);
      setUserState({
        ...userState,
        currentUser:{
          ...userState.currentUser,
          [e.target.name]: e.target.value
        }
      })
    }

    const submitForm = (e: React.SyntheticEvent):void => {
      e.preventDefault();
      
      setUserState({
        currentUser:{
          name: "",
          age: "",
          job: ""
        },
        allUsers:[
          ...userState.allUsers,
          userState.currentUser
        ]
      })

      console.log(userState)

    }

    console.log(userState.currentUser)

  return (
   <div className='container'>
    <h1>React with Typescript</h1>
    <form onSubmit={submitForm}>
      <label htmlFor="userName">Name:</label>
      <input 
        id="userName"
        type="text"
        name="name"
        value={userState.currentUser.name}
        onChange={onChangeHandler}
      />
      <label htmlFor="userAge">Age:</label>
      <input 
        id="userAge"
        type="number"
        name="age"
        value={userState.currentUser.age}
        onChange={onChangeHandler}
       
      /> 
      <label htmlFor="userJob">Job:</label>
      <input 
        id="userJob"
        type="text"
        name="job"
        value={userState.currentUser.job}
        onChange={onChangeHandler}
      />

      <button type='submit'>Add user</button>
    </form>
   </div>
  );
}

export default App;
