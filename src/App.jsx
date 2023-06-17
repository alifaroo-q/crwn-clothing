import Home from "./routes/Home/Home";
import Authentication from "./routes/Authentication/Authentication";
import Navigation from "./routes/Navigation/Navigation";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
