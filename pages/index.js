import Link from 'next/link';

// enviar pro git git push origin main

function Home(){
    return(
        <div>
            <Link href="/sobre">
            <a> Acessar Página Sobre</a>
            </Link>
        </div>
    
    )
}


export default Home;