function FunctionEvent(){

    // function handleClick(){
    //     console.log('Button is clicked');
    // }

    const handleClick = () => {
        console.log('Button is clicked');
    }
    return (
        <div>
            Functional Components 
            <button onClick={handleClick}>Click here</button>
        </div>
    )
} 



export default FunctionEvent;