"use client";
import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const NavbarButton = (): React.ReactElement => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <p>please wait...</p>;
  return isSignedIn ? (
    <div className="flex items-center gap-4">
      <Link href="/dashboard/create-diary">Create Diary</Link>
      <Link href="/dashboard/my-diary">My Diary</Link>
      <UserButton afterSignOutUrl="/" />
    </div>
  ) : (
    <Link href="/sign-in">Sign In</Link>
  );
};

export default NavbarButton;
