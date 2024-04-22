import React from "react";
import { CreateDiaryAction } from "@/actions/createDiaryActions";

export const CreateDiaryForm = (): React.ReactElement => {
  return (
    <form
      action={CreateDiaryAction}
      className="flex flex-col gap-4 max-w-xl mx-auto"
    >
      <textarea
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content"
        placeholder="isi diary mu"
      ></textarea>
      <button className="btn btn-secondary text-white" type="submit">
        Create Now
      </button>
    </form>
  );
};

export default CreateDiaryForm;
