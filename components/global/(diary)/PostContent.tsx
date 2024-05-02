import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IDiary } from "@/utils/supabase";

const PostContent = ({
  diary_id,
  avatar,
  content,
  username,
  email,
}: IDiary): React.ReactElement => {
  return (
    <Link
      href={`/diary/${diary_id}`}
      className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer hover:shadow-xl hover:bg-secondary duration-300 ease-in-out hover:scale-[110%] h-48"
    >
      <Image
        src={avatar as string}
        alt={avatar as string}
        width={50}
        height={50}
        className="rounded-full bg-primary"
      />
      <p className="font-semibold">{username || email}</p>
      <p className="overflow-y-auto">{content}</p>
    </Link>
  );
};

export default PostContent;
