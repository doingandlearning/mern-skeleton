import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import { UserContext } from '../../context/UserContext';
import userService from '../../utils/userService';
import './SignupPage.css';

function SignupPage() {
  const [message, setMessage] = React.useState("")
  const [state, setState] = React.useContext(UserContext)

  const handleSignupOrLogin = () => {
    const freshUser = userService.getUser()
    setState((state) => ({ ...state, user: freshUser }))
  }

  const updateMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='SignupPage'>
      <SignupForm handleSignupOrLogin={handleSignupOrLogin} updateMessage={updateMessage} />
      <p>{message}</p>
    </div>
  );
}

export default SignupPage;