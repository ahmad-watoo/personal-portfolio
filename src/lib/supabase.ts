import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase env vars. Check your .env.local file.\n' +
    'Required: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY'
  )
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface MessageRow {
  id:         string
  first_name: string
  last_name:  string
  email:      string
  subject:    string
  message:    string
  is_read:    boolean
  created_at: string
}