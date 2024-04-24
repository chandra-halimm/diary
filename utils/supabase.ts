import { createClient } from "@supabase/supabase-js";
import { UUID } from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SECRET_KEY as string
);

export interface IDiary {
  content: string;
  email: string;
  username?: string;
  avatar: string;
  created_at?: string;
  comments?: [IComments];
}

export interface IComments extends IDiary {
  id: UUID;
}
