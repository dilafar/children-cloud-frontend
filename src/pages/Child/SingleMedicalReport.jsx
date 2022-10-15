import React from "react";
import MedicalReportTable from "./MedicalReportTable";

const SingleMedicalReport = () => {
  return (
    <div class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl">
      <MedicalReportTable />
    </div>
  );
};

export default SingleMedicalReport;
