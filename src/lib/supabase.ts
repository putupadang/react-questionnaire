
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tpkaxyxmkqdiahccfmkv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa2F4eXhta3FkaWFoY2NmbWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNzczOTUsImV4cCI6MjA4MjY1MzM5NX0.LtYH8HnMXQrGj5bUPPAN_Y0nMOs-2n8QIiMnJ7bbVkw";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Missing Supabase URL or Anon Key");
}

export const supabase = createClient(
  supabaseUrl || "",
  supabaseAnonKey || ""
);
