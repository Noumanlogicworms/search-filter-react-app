import { useState } from "react";
import "./App.css";
import jasonData from "./MOCK_DATA.json";
function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div className="containerInput">
        <input
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="list">
        {jasonData
          .filter((val) => {
            if (val == "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <ul key={key}>
                <li className="data">
                  Name: {val.first_name}, Gender: {val.gender}, Email:{" "}
                  {val.email}
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}

export default App;
