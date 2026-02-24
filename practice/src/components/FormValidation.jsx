import React, { useState } from "react";

const FormValidation = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!mail.includes("@")) newErrors.mail = "Invalid Email";
    if (age <= 0) newErrors.age = "Age must be positive";

    setErrors(newErrors);

    if (!Object.keys(newErrors).length) alert("Profile Saved");
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
        {errors.name && <p>{errors.name}</p>}

        <br />

        <input
          type="email"
          value={mail}
          placeholder="Enter your email"
          onChange={(e) => setMail(e.target.value)}
        />
        {errors.mail && <p>{errors.mail}</p>}

        <br />

        <input
          type="number"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <p>{errors.age}</p>}
        <br />

        <button
          type="submit"
          disabled={!name.trim() || !mail.includes("@") || age <= 0}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormValidation;
