import React from "react";

const PaymentTable = ({
  fees,
  selectedFees,
  onToggle,
  isSelected,
  totalAmount,
}) => {
  return (
    <div>
      <table className="w-full border border-gray-200 rounded-md">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
              Select
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
              Fee Description
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">
              Due Date
            </th>
            <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
              Amount
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {fees.map((fee) => (
            <tr
              key={fee.id}
              className={`border-b border-gray-100 ${
                fee.isSupplementary ? "bg-gray-50 text-sm" : ""
              }`}
            >
              <td className="px-6 py-4">
                {!fee.isSupplementary && (
                  <input
                    type="checkbox"
                    checked={isSelected(fee.id)}
                    onChange={() => onToggle(fee)}
                    className="w-5 h-5 cursor-pointer accent-primary"
                  />
                )}
              </td>

              <td
                className={`px-6 py-4 ${
                  fee.isSupplementary ? "pl-10 text-gray-600" : ""
                }`}
              >
                {fee.name}
              </td>

              <td className="px-6 py-4">{fee.dueDate || "—"}</td>

              <td className="px-6 py-4 text-right">
                {fee.amount ? `₦${fee.amount.toLocaleString()}` : ""}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={4} className="px-6 py-4 bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Total Amount:</span>
                <span className="font-bold text-xl text-primary">
                  ₦{totalAmount.toLocaleString()}
                </span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PaymentTable;
