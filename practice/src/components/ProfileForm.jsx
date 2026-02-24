import React, { useState } from "react";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Profile Saved");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="email"
          value={mail}
          placeholder="Enter your email"
          onChange={(e) => setMail(e.target.value)}
        />
        <br />

        <input
          type="number"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Name: {name}</p>
        <p>Email: {mail}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
};

export default ProfileForm;
