// // import logo from './logo.svg';
import './App.css';
// // import Hello from './components/Hello';
// import Message from './components/Message';
// import Profile from './components/Profile';
// import { useState } from "react";
// import Resume from './components/Resume';
// import FunctionEvent from './components/FunctionEvent';
// import ClassEvent from './components/ClassEvent';
// import Counter from './components/Counter';
// import FunctionalCounter from './components/FunctionalCounter';
// import ConditionalComponent from './components/ConditionalComponent';
// import Product from './components/Product';
import Form from './components/Form';

function App() {
  // const [names, setNames] = useState('Blessing');
  // const changeName = () => {
  //   setNames('Finbarr')
  // }
  
 
  return (

    <div className="App">

      <Form></Form>

      {/* <Product></Product> */}

      {/* <ConditionalComponent></ConditionalComponent> */}

      {/* <FunctionalCounter></FunctionalCounter> */}

      {/* <FunctionEvent></FunctionEvent> */}

      {/* <ClassEvent></ClassEvent> */}

      {/* <Resume name='Umolo blessing'></Resume> */}

      {/* <Counter></Counter> */}
      
      {/* <Message messagecode="10" messagecontent="This is a message from props"/> */}

      {/* <Profile name="Blessing" lastname="Umolo"/> */}
      
      {/* <div>
        <div>{names}</div>
        <button onClick={changeName}>Click to Change name</button>
      </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

     {/* <Hello></Hello>
     <Message></Message> */}
     {/* <Profile name="Umolo" lastname="Blessing">
      <h3>This a profile page of a person</h3>
     </Profile>
     <Profile name="Blessing" lastname="Umolo"></Profile>
     <Profile name="Johnson" lastname="Oriade"></Profile>
     <Profile name="Lilian" lastname="Nkem"></Profile>
     <Blessing></Blessing> */}

    </div>);
}


// function Blessing() {
//   return (
//     <div>Hello my name is umolo blessin johnson</div>
//   )
// }

export default App;




// import React, { useState, useEffect } from 'react';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [showData, setShowData] = useState(false);

//   async function getPosts() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
//       const data = await response.json();
//       setPosts(data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   }

//   useEffect(() => {
//     if (showData) {
//       getPosts();
//     }
//   }, [showData]); // The effect will run whenever showData changes

//   return (
//     <div className="App">
//       <button onClick={() => setShowData(true)}>Load Data</button>
//       {showData && (
//         <div>
//           {posts.map((post) => (
//             <div key={post.id}>
//               <h2>{post.title}</h2>
//               <p>{post.body}</p>
//             </div>
//           ))}

//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



