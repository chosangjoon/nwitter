import { useState } from "react";
import AppRouter from "./Router";

function App() {
  const [IsLogIn, setIsLogIn] = useState(false);
  return <AppRouter IsLogIn={IsLogIn}></AppRouter>;
}

export default App;
