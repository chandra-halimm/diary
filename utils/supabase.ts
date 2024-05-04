import { createClient } from "@supabase/supabase-js";
import { UUID } from "crypto";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SECRET_KEY as string
);

export interface IDiary {
  diary_id?: number;
  content: string;
  email: string | null | undefined;
  username?: string | null | undefined;
  avatar: string | null | undefined;
  created_at?: string | null | undefined;
  comments?: Array<IComments>;
}

export interface IComments extends IDiary {
  comment_id?: UUID | undefined;
}
