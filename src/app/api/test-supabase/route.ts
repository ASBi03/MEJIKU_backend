import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('profiles').select('*').limit(1)

  if (error) {
    return NextResponse.json({ status: 'ERROR', error: error.message }, { status: 500 })
  }

  return NextResponse.json({ status: 'OK', data })
}