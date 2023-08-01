import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
        required></input>
      <br/>
      <label for='phone'>Phone number</label>
      <input
        type='tel'
        id='phone'
        name='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Enter your phone (###-###-####)'
        // US phone regex
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        required></input>
      <br />
      <label for='email'>Email</label>
      <input
        type='text'
        id='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
        required></input>
      <br/>
      <input type="submit" value="Add Contact" aria-label="Add Contact"/>
    </form>
  );
};

