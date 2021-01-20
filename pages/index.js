import Link from 'next/link';

// enviar pro git git push origin main

function Home(){
    return(
        <div style="background-color:#00BFFF;text-align:center">
            <Link href="/sobre">
            <a> Acessar Página Sobre 2</a>
            </Link>
        </div>
    
    )
}


export default Home;