import Login from "./pages/Login"
import Sidebar from "./components/Sidebar"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import CardInfo from "./components/CardInfo"
import data from './data/card_data.json'
import transactions from './data/transaction_data.json'
import TransactionsList from "./components/TransactionList"
// import TransactionChart from "./components/TransactionChart"
import LineChart from "./components/LineChart"
import BarChart from "./components/BarChart"
import PieChart from "./components/PieChart"
import QuickTransfer from "./components/QuickTransfer"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div className="h-full">
      <Dashboard />
    </div>
  )
}

export default App
