//! React Hook Challenge: Dynamic State Management and Document Title Update with useEffect

//* Description: In this challenge, you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. Your component will include:

//? 1. A counter that increments when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.

import { useEffect, useState } from "react";
// import "./index.css";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("thapa");

  // Order matters! Keep Hooks in the same order across renders
  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span> {count} </span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span> {name} </span>
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};



// import { useEffect, useState } from "react";

// export const DataFetcher = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
//       const result = await response.json();
//       setData(result);
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the fetch happens only once

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   );
// };


