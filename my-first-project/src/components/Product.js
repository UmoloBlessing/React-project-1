export default function Product (){
    //const products = ['Laptop', 'Phone', 'Modem', 'Desktop'];
    // const products = [
    //     {id:1, name:'Laptop', price:500},
    //     {id:2, name:'Phone', price:200},
    //     {id:3, name:'Modem', price:50},
    //     {id:4, name:'Desktop', price:400},
    //     {id:5, name:'Laptop', price:700},
    // ];
    // const productList = products.map((product) => <h1 key={product.id} >{product.name}: ${product.price}</h1>)

    //USE THE INDEX METHOD WHEN YOU HAVE AN ARRAY WITH NO ID.
    const fruits = ['Apple', 'Mango', 'Banana'];

    const fruitsList = fruits.map((fruit, index) => <h1 key={index} >{fruit}</h1>)

    return <div>
        {fruitsList}
    </div>
}