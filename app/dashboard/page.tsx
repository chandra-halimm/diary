import React from "react";
import Wrapper from "@/components/global/Wrapper";
import CreateDiaryForm from "@/components/dashboard/CreateDiaryForm";

const page = (): React.ReactElement => {
  return (
    // fungsi react fragment dapat menduplikasi jumlah wrapper atau component yan kita buat
    <React.Fragment>
      <Wrapper>
        <CreateDiaryForm />
      </Wrapper>
    </React.Fragment>
  );
};
export default page;
