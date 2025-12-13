export const runtime = "nodejs";

import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { matric, password } = await req.json();

    if (!matric || !password) {
      return Response.json(
        { error: "Matric number and password are required" },
        { status: 400 }
      );
    }

    // 1️⃣ Find student by matric
    const { data: student, error } = await supabase
      .from("students")
      .select("*")
      .eq("matric", matric)
      .single();

    if (error || !student) {
      return Response.json(
        { error: "Invalid matric number or password" },
        { status: 401 }
      );
    }

    // 2️⃣ Check if account is active
    if (!student.is_active) {
      return Response.json(
        { error: "Account is deactivated. Contact admin." },
        { status: 403 }
      );
    }

    // 3️⃣ Compare password
    const passwordMatch = await bcrypt.compare(
      password,
      student.password_hash
    );

    if (!passwordMatch) {
      return Response.json(
        { error: "Invalid matric number or password" },
        { status: 401 }
      );
    }

    // 4️⃣ Remove sensitive fields
    delete student.password_hash;

    // 5️⃣ Success
    return Response.json({
      message: "Login successful",
      student,
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
