import { useState } from "react"
// import FunctionalCounter from "./FunctionalCounter";
// import Counter from "./Counter"

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true);


    return display ? <div><h3>This is a conditional component</h3></div> : <h3>Nothing here to show</h3>;

    // let output;
    // if(display){
    //     output = <h3>This is a conditional component</h3>
    // } else {
    //     output = <h3>Nothing here to show</h3>
    // }

    // return <div>{output}</div>


    // if(display){
    //     return ( <div>
    //             <h3>This is a conditional component</h3>
    //             {/* <Counter></Counter> */}
    //             </div>);
    // } else {
    //     return ( <div>
    //             <h3>Nothing here to show</h3>
    //             {/* <FunctionalCounter></FunctionalCounter> */}
    //             </div>);
    // }


}