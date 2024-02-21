import "./App.css";
import WelcomeBlock from "./Components/WelcomeBlock/WelcomeBlock";
import { useState } from "react";
import DefaultBlock from "./Components/DefaultBlock/DefaultBlock";
import NavBar from "./Components/NavBar/NavBar";
import Income from "./Components/Income/Income";
import Totals from "./Components/Totals/Totals";

function App() {
  const appStart = useState(false);

  return (
    <>
      <NavBar />
      <WelcomeBlock appStart={appStart} />
      <div className="container">
        <div className="left-section">
          {appStart[0]
            ? [
                <DefaultBlock
                  title={"Household Monthly Salaries"}
                  content={<Income />}
                />,
                <DefaultBlock title={"Tax Bracket Calculation"} content={""} />,
              ]
            : null}
        </div>
        <div className="middle-section"></div>
        <div className="right-section">
          <DefaultBlock title="" content={<Totals />} />
        </div>
      </div>
    </>
  );
}

export default App;
