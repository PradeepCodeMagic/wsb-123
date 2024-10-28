import { useId, useRef } from "react";


export default function User() {
    // Generate unique IDs for form elements
  const nameId = useId();
  const emailId = useId();
  

  // useRef to access form inputs directly
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accessing the input values through refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log('User Name:', name);
    console.log('User Email:', email);

    // Clear form inputs
    nameRef.current.value = '';
    emailRef.current.value = '';
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name:</label>
      <input id={nameId} type="text" ref={nameRef} />

      <label htmlFor={emailId}>Email:</label>
      <input id={emailId} type="email" ref={emailRef} />

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
