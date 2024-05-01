import React from "react";
import PostContent from "./PostContent";
import { supabase } from "@/utils/supabase";

const CardDiaries = async () => {
  const { data, error } = await supabase.from("diary").select();
  if (error) return <p>Please reload Page</p>;
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((diary) => {
        console.log(diary);
        return (
          <PostContent
            key={diary.id}
            avatar={diary.avatar}
            content={diary.content}
            email={diary.email}
            username={diary.username}
          />
        );
      })}
    </div>
  );
};

export default CardDiaries;
