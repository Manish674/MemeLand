import { FC, useState, useEffect } from "react";
import cookieCutter from "cookie-cutter";
import Sidebar from "../components/Sidebar";

interface user {
  username: string,
  email: string
}

const Home:FC = () => { 
  const [detail, setDetail] = useState<user>();

  useEffect(() => {
    let username = cookieCutter.get('username')
    let email = cookieCutter.get('email')

    setDetail({'email': email, 'username': username })
  }, [])

  return (
    <div>
      <Sidebar />
    </div>
  )
}

export default Home;
