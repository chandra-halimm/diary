"use server";
import { redirect } from "next/navigation";
import { getUserData } from "@/utils/clerk";

export const CreateDiaryAction = async (formData: FormData): Promise<void> => {
  const content = formData.get("content");
  const user = getUserData();

  console.log(user);

  redirect("/dashboard/my-diary");
};
