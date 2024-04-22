"use server";

export const CreateDiaryAction = async (formData: FormData): Promise<void> => {
  const content = formData.get("content");
  console.log({ content });
};
