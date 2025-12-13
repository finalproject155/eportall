import { supabase } from "@/lib/supabase";
import { sendStudentCredentials } from "@/lib/mailer";
import bcrypt from "bcryptjs";

function generatePassword(length = 8) {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      matric,
      email,
      surname,
      first_name,
      middle_name,
      gender,
      date_of_birth,
      country,
      nationality_type,
      state_of_origin,
      lga,
      ward,
      marital_status,
      military_personnel,
      phone,
      permanent_address,
      programme,
      department,
      faculty,
      level,
      nok_full_name,
      nok_relationship,
      nok_phone,
      nok_email,
      nok_address,
    } = body;

    const plainPassword = generatePassword();
    const password_hash = await bcrypt.hash(plainPassword, 10);

    const { error } = await supabase.from("students").insert([
      {
        matric,
        email,
        password_hash,
        surname,
        first_name,
        middle_name,
        gender,
        date_of_birth,
        country,
        nationality_type,
        state_of_origin,
        lga,
        ward,
        marital_status,
        military_personnel,
        phone,
        permanent_address,
        programme,
        department,
        faculty,
        level,
        nok_full_name,
        nok_relationship,
        nok_phone,
        nok_email,
        nok_address,
      },
    ]);

    if (error) {
      if (error.code === "23505") {
        return Response.json(
          { error: "Student with this matric number already exists" },
          { status: 400 }
        );
      }
      throw error;
    }

    // 📧 SEND EMAIL
    await sendStudentCredentials({
      email,
      fullName: `${surname} ${first_name}`,
      matric,
      password: plainPassword,
    });

    return Response.json({
      message: "Student added and credentials sent to email",
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Failed to add student" },
      { status: 500 }
    );
  }
}
