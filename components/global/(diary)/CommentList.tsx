import { IComments, supabase } from "@/utils/supabase";
import React from "react";
import Image from "next/image";

type ParamsProps = {
  diary_id: number;
};

export const CommentList = async ({ diary_id }: ParamsProps) => {
  const { data, error } = await supabase
    .from("diary")
    .select("comments")
    .eq("id", diary_id)
    .single();

  if (error) return <p>Please reload the page...</p>;
  if (!data.comments || !data.comments.length) {
    return <p>No comments available</p>;
  }

  return (
    <div className=" flex flex-col gap-4">
      {data.comments.map((comments: IComments) => {
        return (
          <div
            key={comments.comment_id}
            className="card card-body card-bordered p-4 ml-4 bg-base-200"
          >
            <Image
              src={comments.avatar as string}
              alt={comments.avatar as string}
              width={50}
              height={50}
              className="rounded-full bg-primary"
            />
            <p>{comments.username || comments.email}</p>
            <p>{comments.content}</p>
          </div>
        );
      })}
    </div>
  );
};
