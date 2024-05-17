import MainLayout from "../layout/MainLayout";
import Prescription from "../components/generatePrescription/prescription";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function GeneratePrescription() {
  return (
    <MainLayout title="Generate Prescription">
      <Prescription />
    </MainLayout>
  );
}

export default GeneratePrescription;
