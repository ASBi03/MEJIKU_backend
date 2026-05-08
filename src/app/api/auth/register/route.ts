import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email, password, nama } = await request.json();
        const supabase = await createClient();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: nama }
            }
        });

        if (error) throw error;

        return NextResponse.json({ message: "Registrasi berhasil, silakan cek email!", data }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}