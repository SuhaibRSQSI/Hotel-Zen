import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = process.env.REACT_APP_API_URL;

const supabaseKey =  process.env.REACT_APP_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabaseKey, supabaseUrl);
export default supabase;
