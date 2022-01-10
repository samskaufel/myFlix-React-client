import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [email, setemail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(true, username);
  };

   return (
          <div classname="registration-view">
              <form className="registration-form">
              <label>
              Username:
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <label>
              Password:
              <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <label>
              Email:
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
              Birthday:
              <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
          </label>
          <button type="submit" onClick={handleSubmit}>Submit</button>
              </form>
          </div>
      )
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
};
