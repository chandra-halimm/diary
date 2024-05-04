import { createCommentAction } from "@/utils/createCommentAction";
import React from "react";

type ParamsProps = {
  diary_id: number;
};

const CreateCommentForm = ({ diary_id }: ParamsProps) => {
  return (
    <form
      action={createCommentAction}
      className="flex flex-col gap-4 max-w-xl mx-auto"
    >
      <textarea
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content"
        placeholder="isi diary mu"
      />
      <input type="hidden" value={diary_id} name="diary_id" />
      <button className="btn btn-secondary text-white" type="submit">
        Create Now
      </button>
    </form>
  );
};

export default CreateCommentForm;
