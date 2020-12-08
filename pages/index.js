import {useState} from 'react';



function Contador(){
    const [contador, setContador] = useState(1);


    function adcContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adcContador}> Adicionar </button>
        </div>
    );





}



function Home(){
    return(
        <div>
    <div>Home 3</div>
    <Contador/>
    </div>
    )
}


export default Home;