import Home from "./routes/Home/Home";
import SignIn from "./routes/SignIn/SignIn";
import Navigation from "./routes/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
