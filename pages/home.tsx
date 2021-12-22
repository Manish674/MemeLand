import { FC, useState, useEffect } from "react";
import cookieCutter from "cookie-cutter";

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

  console.log(detail)

  return (
    <p>
      Hello world
    </p>
  )
}

export default Home;
