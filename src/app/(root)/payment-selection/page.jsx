"use client";

import React, { useState, useMemo } from "react";
import PaymentBlock from "./components/PaymentBlock";

const FEES_DATA = [
  {
    id: "tuition",
    name: "Tuition",
    amount: 50000,
    dueDate: "2025-12-15",
  },
  {
    id: "supplementary",
    name: "Supplementary Fees",
  },
];

const SUPPLEMENTARY_FEES = [
  {
    id: "sug",
    parentId: "supplementary",
    name: "SUG Fees",
    amount: 15000,
    dueDate: "2025-12-20",
  },
];

const page = () => {
  const [paymentType, setPaymentType] = useState("");
  const [academicSession, setAcademicSession] = useState(
    "2025/2026 - Harmattan Semester"
  );
  const [selectedFees, setSelectedFees] = useState([]);
  const [isPicked, setIsPicked] = useState("full");
  const [paymentAmount, setPaymentAmount] = useState(0);

  const tableRows = useMemo(() => {
    let rows = [];

    FEES_DATA.forEach((fee) => {
      rows.push(fee);

      if (fee.id === "supplementary" && selectedFees.includes(fee.id)) {
        rows.push(
          ...SUPPLEMENTARY_FEES.map((item) => ({
            ...item,
            isSupplementary: true,
          }))
        );
      }
    });

    return rows;
  }, [selectedFees]);

  //   const onToggle = (feeId) => {
  //     if (selectedFees.includes(feeId)) {
  //       setSelectedFees(selectedFees.filter((id) => id !== feeId));
  //     } else {
  //       setSelectedFees([...selectedFees, feeId]);
  //     }
  //   };

  const onToggle = (fee) => {
    setSelectedFees((prev) => {
      const isChecked = prev.includes(fee.id);

      // Parent: Supplementary Fees
      if (fee.id === "supplementary") {
        const childIds = SUPPLEMENTARY_FEES.map((f) => f.id);

        return isChecked
          ? prev.filter((id) => id !== fee.id && !childIds.includes(id))
          : [...prev, fee.id, ...childIds];
      }

      // Child: Supplementary fee
      if (fee.parentId === "supplementary") {
        if (isChecked) {
          return prev.filter((id) => id !== fee.id);
        }

        return prev.includes("supplementary")
          ? [...prev, fee.id]
          : [...prev, "supplementary", fee.id];
      }

      // Normal fee
      return isChecked ? prev.filter((id) => id !== fee.id) : [...prev, fee.id];
    });
  };

  const isSelected = (id) => selectedFees.includes(id);

  //   const totalAmount = FEES_DATA.filter((fee) =>
  //     selectedFees.includes(fee.id) && fee.amount ? fee.amount : 0
  //   ).reduce((sum, fee) => sum + fee.amount, 0);

  const totalAmount = useMemo(() => {
    const allFees = [...FEES_DATA, ...SUPPLEMENTARY_FEES];

    return selectedFees.reduce((sum, id) => {
      const fee = allFees.find((f) => f.id === id);
      return sum + (fee?.amount || 0);
    }, 0);
  }, [selectedFees]);

  const onPaymentPlanChange = (plan) => {
    if (plan === "full") {
      setPaymentAmount(totalAmount);
    } else {
      setPaymentAmount(totalAmount * 0.5);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto w-[80%] my-20">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-bold text-black text-3xl">Payment Selection</h1>
            <p>Select the fees you wish to pay</p>
          </div>

          <div className="flex flex-col items-end">
            <p className="font-bold">Akinrinde Joel</p>
            <p>Matric No: 2021000010</p>
          </div>
        </div>

        <PaymentBlock
          setPaymentType={setPaymentType}
          setAcademicSession={setAcademicSession}
          selectedFees={selectedFees}
          onToggle={onToggle}
          isSelected={isSelected}
          fees={tableRows}
          totalAmount={totalAmount}
          academicSession={academicSession}
          isPicked={isPicked}
          setIsPicked={setIsPicked}
          onPaymentPlanChange={onPaymentPlanChange}
        />
      </div>
    </div>
  );
};

export default page;
