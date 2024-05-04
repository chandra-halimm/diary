"use client";
import { createCommentAction } from "@/utils/createCommentAction";
import React, { RefObject, useRef } from "react";

type ParamsProps = {
  diary_id: number;
};

const CreateCommentForm = ({ diary_id }: ParamsProps) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const resetForm = (): void => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 1000);
  };
  return (
    <form
      action={createCommentAction}
      className="flex flex-col gap-4 max-w-xl mx-auto"
      onSubmit={resetForm}
      ref={formRef}
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
