import { useState, useEffect } from "react";

// exercice 1
//  th -> en
// exercice 2
// en -> th

const { weekDays } = require("../data.json");
export default function Question() {
  const [random, setRandom] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

3

  console.log(weekDays);

  return (
    <section>
        
      {isStarted ? (
        
        <div key="1" className="flex flex-col">
            <h1>How to say : </h1>
          <span>en:{weekDays[random].en} </span>
          {/* <span key={day["en-th"]}> en-th {day["en-th"]}</span>
          <span key={day.th}> thai: {day.th}</span> */}
        </div>
      ) : null}

      <button
        onClick={() => {
          setRandom(Math.floor(Math.random() * 7));
          setIsStarted(true);
        }}
      >
        {isStarted?'Next':'Start'}
      </button>
    </section>
  );
}
