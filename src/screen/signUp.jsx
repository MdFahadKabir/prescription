import { useEffect, useState } from "react";
import Divition from "../array/division";
import { data } from "autoprefixer";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [title, setTitle] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateofBirth] = useState("");
  const [nid, setNid] = useState("");
  const [docType, setDocType] = useState("");
  const [bmdc, setBmdc] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [streetLocation, setStreetlocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [docTypeList, setDocTypeList] = useState([]);
  const [update, setUpdate] = useState([]);

  const handleValidation = () => {
    let navigate = useNavigate();
    let formIsValid = true;

    if (!title) {
      formIsValid = false;
      alert("");
      ("Title is required");
    }

    if (!fname) {
      formIsValid = false;
      alert("First name is required");
    }

    if (!lname) {
      formIsValid = false;
      alert("Last name is required");
    }

    if (!gender) {
      formIsValid = false;
      alert("Gender is required");
    }

    if (!dateOfBirth) {
      formIsValid = false;
      alert("Date of birth is required");
    }

    if (!nid) {
      formIsValid = false;
      alert("National ID/Passport number is required");
    }

    if (!docType) {
      formIsValid = false;
      alert("Doctor type is required");
    }

    if (!bmdc) {
      formIsValid = false;
      alert("BMDC registration number is required");
    }

    if (!division) {
      formIsValid = false;
      alert("Division is required");
    }

    if (!district) {
      formIsValid = false;
      alert("District is required");
    }

    if (!streetLocation) {
      formIsValid = false;
      alert("Street location is required");
    }

    if (!phone) {
      formIsValid = false;
      alert("Phone number is required");
    } else if (!/^\d{11}$/.test(phone)) {
      formIsValid = false;
      alert("Please enter a valid phone number");
    }

    if (!email) {
      formIsValid = false;
      alert("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      alert("Please enter a valid email address");
    }

    if (!password) {
      formIsValid = false;
      alert("Password is required");
    } else if (password.length < 6) {
      formIsValid = false;
      alert("Password must be at least 6 characters long");
    }

    if (!confirmPassword) {
      formIsValid = false;
      alert("Confirm password is required");
    }

    if (password !== confirmPassword) {
      formIsValid = false;
      alert("Passwords do not match");
    }

    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      signup();
    } else {
      window.scrollTo(0, 0);
    }
  };

  const signup = () => {
    const data = new FormData();
    data.append("title", title);
    data.append("first_name", fname);
    data.append("last_name", lname);
    data.append("gender", gender);
    data.append("dob", dateOfBirth);
    data.append("id_card", nid);
    data.append("doctor_type", docType);
    data.append("bmdc_registration", bmdc);
    data.append("division", division);
    data.append("district", district);
    data.append("street_location", streetLocation);
    data.append("phone", phone);
    data.append("email", email);
    data.append("password", password);
    console.log(data);
    fetch(`${import.meta.env.VITE_SERVER}/telemedicine/registerDoctorProfile`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === true) {
          localStorage.setItem("token", res.token);
          alert(res.message);
          setUpdate(update + 1);
          clearFields();
          navigate("/dashboard");
        } else {
          alert(res.message);
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err); // Log fetch errors
        alert("An error occurred while submitting the form.");
      });
  };

  const clearFields = () => {
    setTitle("");
    setFname("");
    setLname("");
    setGender("");
    setDateofBirth("");
    setNid("");
    setDocType("");
    setBmdc("");
    setDivision("");
    setDistrict("");
    setStreetlocation("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
  };

  const getAlldoctor = () => {
    fetch(`${import.meta.env.VITE_SERVER}/app/getAllTeleDoctorsCategory`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setDocTypeList(res.message);
          console.log(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAlldoctor();
  }, [update]);

  return (
    <div>
      <div className="flex justify-center items-center h-screen  w-full bg-white">
        <div className="rounded-lg shadow-lg  max-w-3xl bg-light-paste">
          <h2 className="text-xl font-semibold  text-[#fff] bg-bg-color text-center py-5 rounded-t-xl">
            Doctor Registration
          </h2>
          <form className="space-y-2 px-10 py-5" onSubmit={handleSubmit}>
            <div className="flex sm:flex-col md:justify-between lg:justify-between xl:justify-between">
              <div className="w-full">
                <p className="font-semibold pb-3">Basic Info</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />

                  <select
                    name=""
                    id=""
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option disabled selected>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <input
                    type="date"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setDateofBirth(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="National Id/ Passport number"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setNid(e.target.value);
                    }}
                  />
                  <div className="flex gap-2">
                    <select
                      name=""
                      id=""
                      className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                      onChange={(e) => {
                        setDocType(e.target.value);
                      }}
                    >
                      <option disabled selected>
                        Select Doctor Type
                      </option>
                      {docTypeList.map((item, index) => {
                        return (
                          <option key={index} value={item.category}>
                            {item.category}
                          </option>
                        );
                      })}
                    </select>
                    <input
                      type="text"
                      placeholder="BMDC Registration Number"
                      className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                      onChange={(e) => {
                        setBmdc(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mx-5"></div>
              <div className="w-full">
                <p className="font-semibold pb-3">Contact & Login Info</p>
                <div className="space-y-4 ">
                  <div className="flex gap-2">
                    <select
                      name=""
                      id=""
                      className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                      onChange={(e) => {
                        setDivision(e.target.value);
                      }}
                    >
                      <option disabled selected>
                        Division
                      </option>
                      {Divition.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <select
                      name=""
                      id=""
                      className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                      }}
                    >
                      <option disabled selected>
                        District
                      </option>
                      {division &&
                        Divition.find(
                          (item) => item.name === division
                        )?.districts.map((district, index) => (
                          <option key={index} value={district}>
                            {district}
                          </option>
                        ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Street Location"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setStreetlocation(e.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white `}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white  `}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className={`w-full px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none bg-white `}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="pt-5">
              <button
                type="submit"
                className="w-full  text-white py-2 px-4 rounded-md focus:outline-none   bg-bg-hover  hover:bg-white hover:text-bg-hover duration-700 font-bold mb-3"
              >
                Sign Up
              </button>
              <p className="text-sm  mx-auto text-center">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="     duration-700 font-bold text-lg text-bg-color link link-underline link-underline-black"
                >
                  Sign-In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
