const index = () => {
  const getUser = async () => {
    const promise = await fetch("../api/createUser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "someone",
        password: "1234",
      }),
    });
    console.log(promise);
  };
  return <button onClick={() => getUser()}>Api testing</button>;
};

export default index;
