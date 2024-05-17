import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPatients = ({ closeModal }) => {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [dob, setDob] = useState("");
  const [spouse, setSpouse] = useState("");
  const [email, setEmail] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // Track whether form is submitted

  const genders = ["Male", "Female", "Others"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [errors, setErrors] = useState({
    patientName: "",
    mobileNumber: "",
    gender: "",
    bloodGroup: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Mark the form as submitted

    const newErrors = {};
    if (!patientName) {
      newErrors.patientName = "Please fill out this field.";
    }
    if (!mobileNumber) {
      newErrors.mobileNumber = "Please fill out this field.";
    }
    if (!gender) {
      newErrors.gender = "Please select a gender.";
    }
    if (!dob) {
      newErrors.dob = "Please fill out this field.";
    }
    if (!occupation) {
      newErrors.occupation = "Please fill out this field.";
    }
    if (!bloodGroup) {
      newErrors.bloodGroup = "Please select a blood group.";
    }
    if (!address) {
      newErrors.address = "Please fill out this field.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      toast.success("Patient registered successfully!");
      // Submit the form data
      console.log("Submitting form...", {
        patientName,
        mobileNumber,
        gender,
        occupation,
        dob,
        bloodGroup,
        spouse,
        email,
        father,
        mother,
        address,
      }); // Log the submitted form data
      setTimeout(() => {
        closeModal();
      }, 2000); // Check if closeModal is called properly
    }
  };

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
    setErrors((prevErrors) => ({ ...prevErrors, gender: "" }));
  };

  const handleBloodGroupClick = (selectedBloodGroup) => {
    setBloodGroup(selectedBloodGroup);
    setErrors((prevErrors) => ({ ...prevErrors, bloodGroup: "" }));
  };

  return (
    <>
      <div>
        <div className="w-[900px]">
          <div className="flex justify-between w-full ">
            <div className="w-1/2">
              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="p_name"
                >
                  <span className="text-red">*</span>Patient Name
                </label>
                <input
                  className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="p_name"
                  type="text"
                  placeholder="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                />
                {formSubmitted && errors.patientName && (
                  <p className="text-red text-xs italic">
                    {errors.patientName}
                  </p>
                )}
              </div>
              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="gender"
                >
                  <span className="text-red">*</span>Patient Gender
                </label>
                <div className="flex justify-between">
                  {genders.map((option) => (
                    <button
                      key={option}
                      className={`border w-full mx-1 px-2 py-2.5 font-medium  border-[#BCBDBE] rounded-md ${
                        gender === option ? "bg-[#BCBDBE]  text-white " : ""
                      }`}
                      onClick={() => handleGenderClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {formSubmitted && errors.gender && (
                  <p className="text-red text-xs italic">{errors.gender}</p>
                )}
              </div>

              <div className="px-3 mt-2 w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="dob"
                >
                  <span className="text-red">*</span>Date of Birth
                </label>
                <input
                  className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="dob"
                  type="date" // Change type to "date"
                  placeholder="Jane"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
                {formSubmitted && errors.dob && (
                  <p className="text-red text-xs italic">{errors.dob}</p>
                )}
              </div>

              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="spouse"
                >
                  Spouse Name
                </label>
                <input
                  className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="spouse"
                  type="text"
                  placeholder="Spouse Name"
                  value={spouse}
                  onChange={(e) => setSpouse(e.target.value)}
                />
              </div>
              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="father"
                >
                  Father Name
                </label>
                <input
                  className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="father"
                  type="text"
                  placeholder="Father Name"
                  value={father}
                  onChange={(e) => setFather(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="mobile_number"
                >
                  <span className="text-red">*</span>Mobile Number
                </label>
                <div className="flex items-center">
                  <span className="text-black_3 border border-r-0 border-light-gray rounded-l py-3 px-4 bg-[#767676]/30 text-sm -mt-2">
                    +88
                  </span>
                  <input
                    className="appearance-none bg-white block text-black_3 border border-light-gray rounded-r py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white w-full"
                    id="mobile_number"
                    type="number"
                    placeholder="1xxxxxxxxx"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>
                {formSubmitted && errors.mobileNumber && (
                  <p className="text-red text-xs italic">
                    {errors.mobileNumber}
                  </p>
                )}
              </div>
              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="occupation"
                >
                  <span className="text-red">*</span>Occupation
                </label>
                <input
                  className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="occupation"
                  type="text"
                  placeholder="Occupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  required
                />
                {formSubmitted && errors.occupation && (
                  <p className="text-red text-xs italic">{errors.occupation}</p>
                )}
              </div>
              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="blood_group"
                >
                  <span className="text-red">*</span>Blood group
                </label>
                <div className="flex justify-between w-full">
                  {bloodGroups.map((option) => (
                    <button
                      key={option}
                      className={`border w-full mx-1 py-3 px-1 font-medium  border-[#BCBDBE] rounded-md ${
                        bloodGroup === option ? "bg-[#BCBDBE]  text-white " : ""
                      }`}
                      onClick={() => handleBloodGroupClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {formSubmitted && errors.bloodGroup && (
                  <p className="text-red text-xs italic">{errors.bloodGroup}</p>
                )}
              </div>
              <div className="px-3 mt-1  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="px-3  w-full">
                <label
                  className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                  htmlFor="mother"
                >
                  Mother Name
                </label>
                <input
                  className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                  id="mother"
                  type="text"
                  placeholder="Mother Name"
                  value={mother}
                  onChange={(e) => setMother(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="px-3 w-full">
              <label
                className="block tracking-wide text-black_3 text-xs font-bold mb-2"
                htmlFor="address"
              >
                <span className="text-red">*</span>Address
              </label>
              <input
                className="appearance-none bg-white block w-full text-black_3 border border-light-gray rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                id="address"
                type="text"
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              {formSubmitted && errors.address && (
                <p className="text-red text-xs italic">{errors.address}</p>
              )}
            </div>
          </div>
          <div className="w-full px-3 pt-5">
            <button
              type="submit"
              className="bg-bg-color hover:bg-bg-hover duration-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegisterPatients;
