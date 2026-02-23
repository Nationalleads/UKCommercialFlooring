import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ysbwwiqymxzekeqndnbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzYnd3aXF5bXh6ZWtlcW5kbmJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NzI4MDYsImV4cCI6MjA4NTU0ODgwNn0.Wkbk2JlIZyWemcqEEZxMFPmtSdb_f1mVOq4jECEEA20';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
