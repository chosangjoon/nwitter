import { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fBase";

function App() {
  const [IsLogIn, setIsLogIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter IsLogIn={IsLogIn} />
      <footer>&copy;{new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
