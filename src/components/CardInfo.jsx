import React from "react";

const CardInfo = ({data}) => {
  return (
    <div className={`w-80 h-48 bg-gradient-to-r ${data.from} ${data.to} rounded-lg p-4 text-${data.text} shadow-lg`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Balance</p>
          <p className="text-xl font-bold">{data.balance}</p>
        </div>
        <div className="w-8 h-8">
          {/* Simulating the chip icon */}
          <img src='/cards/chip.png'/>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-gray-400 uppercase">Card Holder</p>
            <p>{data.cardHolder}</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase">Valid Thru</p>
            <p>{data.validThru}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-center text-lg font-mono">{data.cardNumber}</p>
        <div>
            <img src={data.chip} />
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
