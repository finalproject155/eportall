import React from "react";

const PaymentPlan = ({
  academicSession,
  isPicked,
  setIsPicked,
  onPaymentPlanChange,
  totalAmount,
}) => {
  return (
    <div className="mb-20">
      <h1 className="font-bold text-lg">Payment Plan</h1>
      <p>Based on your selection for {academicSession}</p>

      <div className="flex items-center gap-5 my-10">
        <div
          className={`flex items-start gap-2 w-[50%] rounded-xl border-3 px-5 py-5 ${
            isPicked === "full"
              ? "bg-primary/30 border-primary"
              : "border-gray-50"
          }`}
          onClick={() => {
            setIsPicked("full");
            onPaymentPlanChange("full");
          }}
        >
          <input
            type="radio"
            name="paymentPlan"
            checked={isPicked === "full"}
            onChange={() => setIsPicked("full")}
            className="accent-primary-hover w-5 h-5"
          />
          <div className="flex flex-col">
            <label className="font-bold text-lg">Pay in Full</label>
            <span className="font-bold text-xl text-primary">
              {totalAmount === 0 ? "" : "₦" + totalAmount.toLocaleString()}
            </span>
            <p className="py-5 text-sm text-gray-500">
              Pay the entire outstanding balance for the semester at once.
            </p>
          </div>
        </div>
        <div
          className={`flex items-start gap-2 w-[50%] rounded-xl border-3 px-5 py-5 ${
            isPicked === "installment"
              ? "bg-primary/30 border-primary"
              : "border-gray-200"
          }`}
          onClick={() => {
            setIsPicked("installment");
            onPaymentPlanChange("installment");
          }}
        >
          <input
            type="radio"
            name="paymentPlan"
            checked={isPicked === "installment"}
            onChange={() => setIsPicked("installment")}
            className="accent-primary-hover w-5 h-5"
          />
          <div className="flex flex-col">
            <label className="font-bold text-lg">
              Pay in Installments (50%)
            </label>
            <span className="font-bold text-xl text-primary">
              {totalAmount === 0
                ? ""
                : "₦" + (totalAmount * 0.5).toLocaleString()}
            </span>
            <p className="py-5 text-sm text-gray-500">
              Pay half of the total amount now. The remaining balance will be
              due later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
