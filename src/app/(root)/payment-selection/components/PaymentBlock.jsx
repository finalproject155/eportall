import React from "react";
import PaymentTable from "./PaymentTable";
import PaymentPlan from "./PaymentPlan";
import { MoveRight } from "lucide-react";

const PaymentBlock = ({
  setPaymentType,
  setAcademicSession,
  selectedFees,
  onToggle,
  isSelected,
  fees,
  totalAmount,
  academicSession,
  isPicked,
  setIsPicked,
  onPaymentPlanChange,
}) => {
  return (
    <div className="bg-white p-10 rounded-md border border-gray-200 shadow-sm relative">
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-2 w-[50%]">
          <label htmlFor="paymentType">Payment Type</label>
          <select
            onChange={(e) => setPaymentType(e.target.value)}
            name="paymentType"
            id="paymentType"
            className="border border-gray-200 rounded-md p-3 bg-gray-50"
          >
            <option value="">Select Payment Type</option>
            <option value="Tuition & Supplementary Fees">
              Tuition & Supplementary Fees
            </option>
            <option value="Supplementary Fees Only">
              Supplementary Fees Only
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-2 w-[50%]">
          <label htmlFor="academicSession">Academic Session</label>
          <select
            onChange={(e) => setAcademicSession(e.target.value)}
            name="academicSession"
            id="academicSession"
            value={academicSession}
            className="border border-gray-200 rounded-md p-3 bg-gray-50"
          >
            <option value="">Select Academic Session</option>
            <option value="2025/2026 - Rain Semester">
              2025/2026 - Rain Semester
            </option>
            <option value="2025/2026 - Harmattan Semester">
              2025/2026 - Harmattan Semester
            </option>
          </select>
        </div>
      </div>

      <hr className="my-10" />

      <div>
        <div>
          <h2 className="font-bold text-lg mb-4">Fee Details</h2>
        </div>
        <PaymentTable
          fees={fees}
          selectedFees={selectedFees}
          onToggle={onToggle}
          isSelected={isSelected}
          totalAmount={totalAmount}
        />
      </div>

      <hr className="my-10" />

      <PaymentPlan
        academicSession={academicSession}
        isPicked={isPicked}
        setIsPicked={setIsPicked}
        onPaymentPlanChange={onPaymentPlanChange}
        totalAmount={totalAmount}
      />

      <button className="w-[15%] bg-primary transition hover:bg-primary-hover text-white py-3 rounded-md absolute right-10 bottom-10 flex items-center justify-center gap-5">
        <p>Continue</p>
        <MoveRight />
      </button>
    </div>
  );
};

export default PaymentBlock;
