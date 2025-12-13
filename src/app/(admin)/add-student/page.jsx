"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AddStudentPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // shadcn Select states
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [military, setMilitary] = useState("");
  const [level, setLevel] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const baseData = Object.fromEntries(formData.entries());

    const data = {
      ...baseData,
      gender,
      marital_status: maritalStatus,
      military_personnel: military,
      level,
    };

    const res = await fetch("/api/admin/add-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (res.ok) {
      setMessage("✅ Student added successfully. Password sent to email.");
      e.target.reset();
      setGender("");
      setMaritalStatus("");
      setMilitary("");
      setLevel("");
    } else {
      setMessage("❌ " + (json.error || "Something went wrong"));
    }

    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Student</h1>

      {message && (
        <p className="mb-4 font-medium text-blue-600">{message}</p>
      )}

      <form
        onSubmit={submitForm}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* PERSONAL INFO */}
        <h2 className="col-span-2 text-xl font-semibold mt-6">
          Personal Information
        </h2>

        <Input required name="surname" placeholder="Surname" />
        <Input required name="first_name" placeholder="First Name" />
        <Input name="middle_name" placeholder="Middle Name" />

        <Select value={gender} onValueChange={setGender}>
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
          </SelectContent>
        </Select>

        <Input required type="date" name="date_of_birth" />

        <Input required name="country" placeholder="Country" />
        <Input required name="nationality_type" placeholder="Nationality Type" />

        <Input required name="state_of_origin" placeholder="State of Origin" />
        <Input required name="lga" placeholder="Local Govt. Area" />
        <Input name="ward" placeholder="Ward" />

        <Select value={maritalStatus} onValueChange={setMaritalStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Marital Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Single">Single</SelectItem>
            <SelectItem value="Married">Married</SelectItem>
          </SelectContent>
        </Select>

        <Select value={military} onValueChange={setMilitary}>
          <SelectTrigger>
            <SelectValue placeholder="Military Personnel?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="No">No</SelectItem>
            <SelectItem value="Yes">Yes</SelectItem>
          </SelectContent>
        </Select>

        {/* CONTACT INFO */}
        <h2 className="col-span-2 text-xl font-semibold mt-6">
          Contact Information
        </h2>

        <Input required name="phone" placeholder="Phone Number" />
        <Input required type="email" name="email" placeholder="Email Address" />
        <Textarea
          required
          className="col-span-2"
          name="permanent_address"
          placeholder="Permanent Address"
        />

        {/* ACADEMIC INFO */}
        <h2 className="col-span-2 text-xl font-semibold mt-6">
          Academic Information
        </h2>

        <Input required name="matric" placeholder="Matric Number" />
        <Input required name="programme" placeholder="Programme" />
        <Input required name="department" placeholder="Department" />
        <Input required name="faculty" placeholder="Faculty" />

        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger>
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="100">100</SelectItem>
            <SelectItem value="200">200</SelectItem>
            <SelectItem value="300">300</SelectItem>
            <SelectItem value="400">400</SelectItem>
            <SelectItem value="500">500</SelectItem>
          </SelectContent>
        </Select>

        {/* NEXT OF KIN */}
        <h2 className="col-span-2 text-xl font-semibold mt-6">
          Next of Kin
        </h2>

        <Input required name="nok_full_name" placeholder="Full Name" />
        <Input required name="nok_relationship" placeholder="Relationship" />
        <Input required name="nok_phone" placeholder="Phone Number" />
        <Input required type="email" name="nok_email" placeholder="Email" />
        <Textarea
          required
          className="col-span-2"
          name="nok_address"
          placeholder="Address"
        />

        <Button
          disabled={loading}
          type="submit"
          className="col-span-2 mt-4"
        >
          {loading ? "Adding Student..." : "Add Student"}
        </Button>
      </form>
    </div>
  );
}
