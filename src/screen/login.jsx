import { useEffect, useState } from "react";
import logo from "../../public/assets/logo.png";
import doc from "../../public/images/doc.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userinfo, setUserinfo] = useState("");
  let navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const login = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("phone", phone);
    data.append("password", password);
    fetch(`${import.meta.env.VITE_SERVER}/telemedicine/loginDoctorWeb`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === true) {
          localStorage.setItem("token", res.token);

          toast.success("Login successful!", { autoClose: 5000 });
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000); // Delay navigation by 2 seconds
        } else {
          toast.error("Login Failed!", { autoClose: 5000 });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
  };
  const getDocinfo = () => {
    const data = new FormData();
    data.append("token", localStorage.getItem("token"));
    fetch(
      `${
        import.meta.env.VITE_SERVER
      }/telemedicine/getTelemedicineDoctorByIdWeb`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          navigate("/");
          localStorage.removeItem("token");
        } else {
          setUserinfo(res.message);
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDocinfo();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen  w-full bg-white">
      <div className="rounded-lg shadow-lg p-10 max-w-fit w-full bg-bg-color">
        <img src={logo} alt="LOGO" className="h-24 mx-auto" />
        {/* <h2 className="text-2xl font-semibold mb-6 text-[#fff]">Sign In</h2> */}
        <div className="flex sm:flex-col md:justify-between lg:justify-between xl:justify-between ">
          <div className="w-full my-auto sm:hidden md:block lg:block xl:block">
            <img src={doc} className="w-80 h-auto" />
          </div>
          <div className="mx-5"></div>
          <div className="w-full my-auto">
            {" "}
            <div className="pb-5">
              <p className="text-white text-lg md:text-xl lg:text-xl xl:text-xl font-semibold ">
                Welcome Back to Aromo Health
              </p>
              <p className="text-white text-base md:text-lg lg:text-lg xl:text-lg font-semibold ">
                Log in Here to Continue
              </p>
            </div>
            <form className="space-y-4" onSubmit={login}>
              <div>
                <label htmlFor="email" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 py-2"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full  text-bg-hover py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark  bg-white hover:bg-bg-hover hover:text-white duration-700 font-bold "
              >
                Login
              </button>
              <p className="text-sm text-white">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="text-white  focus:outline-none focus:underline hover:underline duration-700 font-bold text-lg"
                >
                  Register
                </Link>
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
