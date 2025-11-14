import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zxzprlzpyjfazcgsenpi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4enBybHpweWpmYXpjZ3NlbnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwODg1OTQsImV4cCI6MjA3ODY2NDU5NH0.-dTknNpC50LTiRFaMNgSZMBz5M4eGaXcCV0eTJ-9cPw";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false, // 🔥 FIXES SecurityError
    autoRefreshToken: false,
  },
});

console.log(supabase);
async function test() {
  const { data, error } = await supabase.from("bookings").select("*");
  if (error) console.error("Error💥💥:", error);
  else console.log("Data:", data);
}

test();

export default supabase;
