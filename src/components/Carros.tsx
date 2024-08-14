import Ferrari from "/ferrari.jpg"

export default function Carros(){
    return(
        <main>
            <img src={Ferrari} alt="ferrari-alt" width="300px"/>
            <ul>
                <li>Fiat</li>
                <li>Chevorlet</li>
                <li>Uno</li>
                <li>Honda</li>
                <li>Ferrari</li>
            </ul>
        </main>
    );
}