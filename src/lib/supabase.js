import { supabase as projectSupabase } from './customSupabaseClient';

// Re-export the system-configured client to ensure all components
// use the correct credentials from customSupabaseClient.js
export const supabase = projectSupabase;

// Check configuration status
// Since we rely on customSupabaseClient.js which is initialized by the system,
// we consider it configured if the module loads.
// Note: We cannot inspect customSupabaseClient.js content directly, but it
// is expected to be initialized with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.
export const isSupabaseConfigured = () => {
  if (!supabase) {
    console.error('Supabase client is not initialized');
    return false;
  }
  return true;
};