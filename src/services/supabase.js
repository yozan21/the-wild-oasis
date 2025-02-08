import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://htorowzlmmmnsmplndbn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0b3Jvd3psbW1tbnNtcGxuZGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMTUxOTQsImV4cCI6MjA0ODc5MTE5NH0.jSDXyUisv40FonPiVj_RL_QsVVzznqhnpw55yH-VGQ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
