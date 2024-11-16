import React from "react";

const TransactionItem = ({ icon, title, date, amount, textColor }) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm w-64">
      {/* Icon */}
      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      {/* Details */}
      <div className="flex-1">
        <p className="text-gray-900 font-medium text-xs">{title}</p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
      {/* Amount */}
      <p className={`text-xs font-semibold`} style={{ color: textColor }}>
        {amount}
      </p>
    </div>
  );
};

const TransactionsList = ({transactions}) => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          icon={transaction.icon}
          title={transaction.title}
          date={transaction.date}
          amount={transaction.amount}
          textColor={transaction.text_color}
        />
      ))}
    </div>
  );
};

export default TransactionsList;
