import { useContext, useState } from "react";
import MainLayout from "../layout/MainLayout";
import Preview from "../components/doctorPrescription/preview";
import UserContext from "../context/UserContext";
import InputForm from "../components/doctorPrescription/inputForm";
import UpdateFrom from "../components/doctorPrescription/updateFrom";

const DoctorPrescriptionProfile = () => {
  const { userinfo, setUserinfo } = useContext(UserContext);
  const [tab, setTab] = useState(false);
  const [preview, setPreview] = useState(false);
  const [update, setUpdate] = useState(false);

  return (
    <MainLayout title="Doctor Prescription Profile">
      <div className="container mx-auto max-w-8xl">
        <div className="flex flex-row gap-4">
          <div className="w-1/3">
            <div className="flex justify-between  py-5">
              <div>
                <h3 className="text-[22px] font-semibold">
                  Doctor Prescription Profile
                </h3>
              </div>
              <div className="flex justify-between gap-5">
                <p
                  onClick={() => {
                    setTab(true);
                    setUpdate(update + 1);
                  }}
                  className="underline cursor-pointer"
                >
                  Edit
                </p>
                <p
                  onClick={() => {
                    setPreview(true);
                    setUpdate(update + 1);
                  }}
                  className="underline cursor-pointer"
                >
                  Preview
                </p>
              </div>
            </div>
            {tab ? (
              <UpdateFrom
                update={update}
                setUpdate={setUpdate}
                setTab={setTab} // pass setTab function as prop
                tab={tab}
              />
            ) : (
              <InputForm
                userId={userinfo._id}
                update={update}
                setUpdate={setUpdate}
              />
            )}
          </div>
          {/* Preview component */}
          <div className="w-2/3 p-2">
            {preview ? (
              <Preview update={update} setUpdate={setUpdate} />
            ) : (
              <>
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-[30px]">Preview will show here</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DoctorPrescriptionProfile;
