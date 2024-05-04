import { supabase } from "@/utils/supabase";
import React from "react";
import Image from "next/image";
import Wrapper from "@/components/global/Wrapper";
import CreateCommentForm from "../../../components/dashboard/CreateCommentForm";

type ParamsProps = {
  params: {
    id: number;
  };
};

const page = async ({ params }: ParamsProps): Promise<React.ReactElement> => {
  const { data, error } = await supabase
    .from("diary")
    .select()
    .eq("id", params.id)
    .single();
  const posted_at = new Date(data.created_at).toLocaleDateString();

  if (error) return <p>Please return the page ...</p>;

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <Image src={data.avatar} alt={data.avatar} height={300} width={300} />
        </div>
        <i>posted at {posted_at}</i>
        <h3>{data.email || data.username}</h3>
        <p>{data.content}</p>
      </div>
      <CreateCommentForm diary_id={data.id} />
    </Wrapper>
  );
};

export default page;

// 4:50
