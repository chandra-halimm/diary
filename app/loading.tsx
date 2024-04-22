import Wrapper from "@/components/global/Wrapper";
import React from "react";

const loading = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Wrapper>
        <div className="flex justity-center align-center">
          <span className="loading loading-infinity loading-lg w-40"></span>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default loading;
