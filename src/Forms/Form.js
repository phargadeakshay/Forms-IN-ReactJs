import React, { useState } from "react";

const Form = () => {
  const [newRegistration, setnewRegistration] = useState({
    fullname: "",
    email: "",
  });
  const [records, setRecords] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setnewRegistration({ ...newRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setRecords([...records, newRegistration]);
    console.log(records, "before");

    setnewRegistration({ fullname: "", email: "" });
    setFormErrors(validate(records));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };
  return (
    <div className="flex justify-center items-center bg-blue-700 h-screen text-white text-lg fontse">
      <h1 className="text-black ">My Buddy List</h1>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-auto">
          {/* <label for="inputPassword2" class="visually-hidden">
            Password
          </label> */}
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            onChange={handleInput}
            value={newRegistration.fullname}
            name="fullname"
            id="fullname"
          />
        </div>
        <p className="text-danger">{formErrors.username} </p>
        <div class="col-auto">
          {/* <label for="inputPassword2" class="text-black">
            Email
          </label> */}
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            value={newRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
          <p className="text-danger">{formErrors.email} p</p>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Add Buddy
          </button>
        </div>
      </form>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            {/* <th scope="col">index</th> */}
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((curElement, index) => {
            const { fullname, email } = curElement;
            return (
              <tr>
                {/* <th scope="row">{index}</th> */}

                <td>{fullname}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
