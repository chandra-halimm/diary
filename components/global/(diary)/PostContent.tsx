import React from "react";
import Image from "next/image";

const PostContent = ({ avatar, content, username, email }: any) => {
  return (
    <div className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer hover:shadow-xl hover:bg-secondary duration-300 ease-in-out hover:scale-[110%] h-48">
      <Image
        src={avatar}
        alt={avatar}
        width={50}
        height={50}
        className="w-50 h-50 rounded-full bg-primary p-2 object-fit"
      />
      <p className="font-semibold">{username || email}</p>
      <p className="overflow-y-auto">{content}</p>
    </div>
  );
};

export default PostContent;
