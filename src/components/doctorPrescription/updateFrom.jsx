import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const UpdateFrom = ({ update, setUpdate, setTab, tab }) => {
  const [dname, setDname] = useState("");
  const [qualification, setQualification] = useState("");
  const [dnamebangla, setDnamebangla] = useState("");
  const [qualificationbangla, setQualificationbangla] = useState("");
  const [chamber, setChamber] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [oldData, setOldData] = useState([]);
  const getDocPrescription = () => {
    const data = new FormData();
    data.append("token", localStorage.getItem("token"));
    fetch(
      `${
        import.meta.env.VITE_SERVER
      }/telemedicine/getRegisterDoctorPrescriptionProfile`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          setDname(oldData.doctor_display_name);
          setQualification(oldData.doctor_qualification);
          setDnamebangla(oldData.doctor_display_name_bangla);
          setQualificationbangla(oldData.doctor_qualification_bangla);
          setChamber(oldData.chamber);
          setVisitTime(oldData.visitTime);
          setOldData(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const updateForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("doctor_display_name", dname);
    data.append("doctor_qualification", qualification);
    data.append("doctor_display_name_bangla", dnamebangla);
    data.append("doctor_qualification_bangla", qualificationbangla);
    data.append("chamber", chamber);
    data.append("visitTime", visitTime);
    data.append("user_id", oldData.user_id);
    fetch(
      `${
        import.meta.env.VITE_SERVER
      }/telemedicine/updateDoctorPrescriptionProfile`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.message === true) {
          setUpdate(update + 1);
          setTab(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  useEffect(() => {
    getDocPrescription();
  }, [update]);

  return (
    <div>
      <form className="space-y-4" onSubmit={updateForm}>
        <div>
          <label htmlFor="doctorname">Doctor Display Name English</label>
          <input
            onChange={(e) => {
              setDname(e.target.value);
            }}
            value={dname}
            type="text"
            id="doctorname"
            placeholder="Example: Dr. Muhammed Mahmud Hossain"
            className="w-full border px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none "
          />
        </div>
        <div>
          <label htmlFor="doctorname">Doctor Display Name Bangla</label>
          <input
            onChange={(e) => {
              setDnamebangla(e.target.value);
            }}
            value={dnamebangla}
            type="text"
            id="doctorname"
            placeholder="Example: ডাঃ মুহাম্মদ মাহমুদ হোসাইন"
            className="w-full border px-4 py-2 border-transparent focus:border-transparent focus:ring-0 rounded-md focus:outline-none "
          />
        </div>
        <div>
          <label htmlFor="doctorname">Doctor Qualification English</label>
          <ReactQuill
            theme="snow"
            value={qualification}
            onChange={setQualification}
            placeholder="Example: M.B.B.S (CU)"
          />
        </div>
        <div>
          <label htmlFor="doctorname">Doctor Qualification Bangla</label>
          <ReactQuill
            theme="snow"
            value={qualificationbangla}
            onChange={setQualificationbangla}
            placeholder="Example: এম.বি.বি.এস (সি.ইউ)"
          />
        </div>
        <div>
          <label htmlFor="doctorname">Chamber</label>
          <ReactQuill
            theme="snow"
            value={chamber}
            onChange={setChamber}
            placeholder="মোজাফ্ফর ভিলা"
          />
        </div>
        <div>
          <label htmlFor="doctorname">Visit Time</label>
          <ReactQuill
            theme="snow"
            value={visitTime}
            onChange={setVisitTime}
            placeholder="সাক্ষাতের সময়: প্রতিদিন সন্ধ্যা ৭টা রাত ১টা (যোগাযোগ সাপেক্ষে)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-bg-hover py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:bg-primary-dark  bg-white hover:bg-bg-hover hover:text-white duration-700 font-bold border border-bg-hover "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateFrom;
