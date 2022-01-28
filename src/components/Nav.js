import '../styles/Nav.css';

export default function Nav(){
    const globe='https://img.icons8.com/color/48/000000/geography--v1.png';
    return(
        <nav className="navbar">
            <img src={globe} alt="globe image"/>
            <p>my travel journal</p>
        </nav>
    )
}