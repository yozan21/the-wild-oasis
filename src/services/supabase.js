import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tdemmzvorbhpqrsemzcz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZW1tenZvcmJocHFyc2VtemN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMDkxNjQsImV4cCI6MjA2NDY4NTE2NH0.ICnVZE1bOUVmsNA1Kj3R2vLUTMCHliDgpbxC1zhP_Ms";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
