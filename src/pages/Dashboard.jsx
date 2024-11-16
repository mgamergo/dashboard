import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import cardsData from "../data/card_data.json";
import transactions from "../data/transaction_data.json";
import CardInfo from "../components/CardInfo";
import TransactionsList from "../components/TransactionList";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import QuickTransfer from "../components/QuickTransfer";
import LineChart from "../components/LineChart";

const Dashboard = () => {
  console.log(cardsData[0]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Navbar />

        {/* ROW - 1 */}
        <div className="flex mb-5">
          <div className="w-2/3">
            <div className="flex items-center justify-between px-3 text-gray-700">
              <h3 className="font-semibold">My Cards</h3>
              <p className="text-sm hover:underline cursor-pointer">See All</p>
            </div>
            <div className="w-full flex justify-around mt-4">
              <CardInfo data={cardsData[0]} color={true} />
              <CardInfo data={cardsData[1]} />
            </div>
          </div>
          <div className="w-1/3 ml-5">
            <div className="flex items-center justify-between px-3 text-gray-700">
              <h3 className="font-semibold">Recent Transactions</h3>
            </div>
            <TransactionsList transactions={transactions} />
          </div>
        </div>

        {/* ROW - 2 */}
        <div className="flex">
          <div className="w-2/3">
            <div className="flex items-center justify-between px-3 text-gray-700">
              <h3 className="font-semibold">Weekly Activity</h3>
            </div>
            <div className="w-full flex mt-4">
              <BarChart />
            </div>
          </div>
          <div className="w-1/3 ml-5">
            <div className="flex items-center justify-between px-3 text-gray-700 mb-4">
              <h3 className="font-semibold">Expense Statistics</h3>
            </div>
            <PieChart />
          </div>
        </div>

        {/* ROW - 3 */}
        <div className="flex mt-5">
          <div className="w-2/5">
            <div className="flex items-center justify-between px-3 text-gray-700">
              <h3 className="font-semibold">Quick Transfer</h3>
            </div>
            <div className="w-full flex mt-4">
              <QuickTransfer />
            </div>
          </div>
          <div className="w-3/5 ml-5">
            <div className="flex items-center justify-between px-3 text-gray-700 mb-4">
              <h3 className="font-semibold">Balance History</h3>
            </div>
            <LineChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
