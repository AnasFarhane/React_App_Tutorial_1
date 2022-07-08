import './App.css';

const Person = (props)=>{
    return (
        <>
            <h1>Name : {props.name}</h1>
            <h2>Last Name : {props.lastName}</h2>
            <h2>Age : 30</h2>
        </>
    )
}


const App = () =>{
    const name = 'John';
    const isNameShowing = true;
    return (
        <div className="App">
            <h1> Hello, {isNameShowing ? name: 'World'}! </h1>
            {
                name ? (
                    <>
                    <Person name='John' lastName='Doe'/>
                    <Person name='oppa' lastName='nuna'/>
                    </>
                ):(
                    <>
                    <h1>test</h1>
                    <h2>There is no name</h2>
                    </>
                    )
            }
        </div>
);
}

export default App;
