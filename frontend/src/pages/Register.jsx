import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section>
        <h1 className="py-5 font-bold text-5xl flex items-center justify-center gap-3">
          <FaUser /> Register
        </h1>
        <p className="py-4">Please create an account</p>

        <section className="form max-w-md mx-auto">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="form-group">
              <input type="text" className="w-full border py-1 px-2 rounded-sm  form-control" id="name" name="name" value={name} placeholder="Enter your name" onChange={onchange} />
            </div>
            <div className="form-group">
              <input type="text" className="w-full border py-1 px-2 rounded-sm  form-control " id="email" name="email" value={email} placeholder="Enter your email" onChange={onchange} />
            </div>
            <div className="form-group">
              <input type="password" className="w-full border py-1 px-2 rounded-sm  form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onchange} />
            </div>
            <div className="form-group">
              <input type="password" className="w-full border py-1 px-2 rounded-sm  form-control" id="password2" name="password2" value={password2} placeholder="Confirm your password" onChange={onchange} />
            </div>

            <div className="form-group py-7">
              <button type="submit" className="w-full py-2 rounded-md bg-black text-white ">
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Register;
