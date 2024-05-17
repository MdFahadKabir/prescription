import { useEffect, useState } from "react";
import aromo from "../../../public/assets/logo.png";

const Preview = ({ update }) => {
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
          setOldData(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDocPrescription();
  }, [update]);

  return (
    <div className="flex flex-col h-[100vh]">
      <div className=" relative flex-grow">
        <div className="absolute top-0 w-full">
          <div className="grid grid-cols-5 gap-2 bg-bg-color  h-auto p-2">
            <div className="text-start col-span-2">
              <p className="font-semibold text-white text-nowrap">
                {oldData?.doctor_display_name}
              </p>
              <span
                dangerouslySetInnerHTML={{
                  __html: oldData?.doctor_qualification,
                }}
                className="text-white !text-[12px]"
              ></span>
            </div>
            <div className="flex justify-center items-center">
              <img src={aromo} alt="" className="h-20" />
            </div>
            <div className="text-right col-span-2">
              <p className="font-semibold text-white text-[12px] banglaFont">
                {oldData?.doctor_display_name_bangla}
              </p>
              <span
                dangerouslySetInnerHTML={{
                  __html: oldData?.doctor_qualification_bangla,
                }}
                className="text-white !text-[12px] banglaFont"
              ></span>
            </div>
          </div>
          <div className="h-8 border-b border-t w-full px-2">
            <div className="flex justify-between">
              <div className="w-2/3">Name: Md. Irfath Chowdhury Joy</div>
              <div className="flex justify-between w-1/3">
                <div>Age: 25y</div>
                <div>Date: 20/04/2024</div>
              </div>
            </div>
          </div>

          <div className="flex h-[40vh]">
            <div className="w-1/3 p-2 border-r">
              <ul className="list-none">
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
            <div className="w-2/3">Rx</div>
          </div>
        </div>
      </div>
      <div className="h-32 bg-bg-color">
        <div className="flex justify-between p-5">
          <div className="">
            <span
              dangerouslySetInnerHTML={{
                __html: oldData?.chamber,
              }}
              className="!text-[12px] text-nowrap banglaFont"
            ></span>
          </div>
          <div className="">
            <span
              dangerouslySetInnerHTML={{
                __html: oldData?.visitTime,
              }}
              className="!text-[12px] text-nowrap banglaFont"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
