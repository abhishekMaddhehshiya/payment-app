import { useState } from "react";
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [username,setUsername] = useState("A")
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          }
        )
        setBalance(res.data.balance);
        setUsername(res.data.username);
      } catch (error) {
        navigate("/signin");
      }
      
    }
    fetchData();

  }, [])


  return <div>

    <Appbar firstChar={username.at(0)} />
    <div className="m-8">
      <Balance value={balance} />
      <Users />
    </div>
  </div>
}
