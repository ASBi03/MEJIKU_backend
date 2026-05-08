'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function register(formData: FormData) {
  const supabase = await createClient()

  const nama = formData.get('nama') as string
  const no_hp = formData.get('no_hp') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirm_password') as string

  //harus isi semua semua
  if (!nama || !no_hp || !email || !password || !confirmPassword) {
    return { error: 'Semua data harus di isi'}
  }

  // Valid pass
  if (password !== confirmPassword) {
    return { error: 'Password dan konfirmasi password tidak cocok' }
  }

  if (password.length < 8) {
    return { error: 'Password minimal 8 karakter' }
  }

  // auth
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signUpError) {
    return { error: signUpError.message }
  }

  if (!data.user) {
    return { error: 'Gagal membuat akun, coba lagi' }
  }

  console.log('Data yang akan diinsert: ', [ data.user.id, nama, no_hp, email])

  //simpan data ke supa
  const { error: profileError } = await supabaseAdmin
    .from('profiles')
    .upsert({
      id: data.user.id,
      nama,
      no_hp,
      email,
    })

  console.log('Profile error: ', profileError)

  if (profileError) {
    return { error: 'Gagal menyimpan profil: ' + profileError.message }
  }

  redirect('/dashboard')
}

//login
export async function login(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: 'Email atau password salah' }
  }

  redirect('/dashboard')
}

//Lupa pass
export async function forgotPassword(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string

  if (!email) return { error: 'Email harus diisi' }
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: undefined,
    },
  })

  if (error) return { error: 'Email tidak ditemukan' }
  return { success: 'Kode OTP telah dikirim ke email Anda' }
}

//OTP
export async function verifyOTP(formData: FormData) {
  const supabase = await createClient()
  const email = formData.get('email') as string
  const token = formData.get('token') as string
  
  if (!token) return { error: 'Kode OTP harus diisi'}
  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: 'magiclink',
  })

  if (error) return { error: 'Kode OTP salah atau sudah kadaluarsa' }
  return { success: 'Kode OTP berhasil diverifikasi, silakan buat password baru' }
}

//Reset pass
export async function resetPassword(formData: FormData) {
  const supabase = await createClient()
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirm_password') as string

  if (!password || !confirmPassword) return { error: ' Semua data harus diisi' }
  if (password !== confirmPassword) return { error: 'Password tidak cocok' }
  if (password.length < 8) return { error: 'Password minimal 8 karakter' }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) return { error: 'Gagal mendapatkan informasi pengguna, silakan coba lagi' }

  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: password,
  });

  if (!signInError) {return { error: 'Password baru tidak boleh sama dengan password lama' } }
  
  const { error } = await supabase.auth.updateUser({ password });
  if (error) return { error: 'Gagal mengubah password, silakan coba lagi' };

  await supabase.auth.signOut();

  return { success: 'Password berhasil diubah, silakan login dengan password baru' };
}

//logout
export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/login')
}

