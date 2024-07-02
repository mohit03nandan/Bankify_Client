import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Dashboard from "./Pages/Dashboard"
import SendMoney from "./Pages/SendMoney"
import SignIn from "./Pages/SignIn"
import Signup from "./Pages/Signup"
export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
      </>
  )
}