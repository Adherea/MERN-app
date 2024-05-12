import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section>
        <h1 className="py-5 font-bold text-5xl flex items-center justify-center gap-3">
          <FaSignInAlt /> Login
        </h1>
        <p className="py-4">Login bang</p>

        <section className="form max-w-md mx-auto">
          <form onSubmit={onSubmit} className="flex flex-col gap-4 pt-14">
            <div className="form-group">
              <input type="text" className="w-full border py-1 px-2 rounded-sm  form-control form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onchange} />
            </div>
            <div className="form-group">
              <input type="password" className="w-full border py-1 px-2 rounded-sm  form-control form-control" id="password" name="password" value={password} placeholder="Enter your password" onChange={onchange} />
            </div>

            <div className="form-group">
              <button type="submit" className="w-full py-2 rounded-md bg-black text-white">
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Login;
