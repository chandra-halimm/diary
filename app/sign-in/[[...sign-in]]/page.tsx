import { SignIn } from "@clerk/nextjs";

import React from "react";

const page = (): React.ReactElement => {
  return (
    <div className="flex justify-center items-center pt-16">
      <SignIn />
    </div>
  );
};

export default page;
