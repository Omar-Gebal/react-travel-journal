import '../styles/Footer.css';

export default function Footer(){
    //icons
    const githubIcon = "https://img.icons8.com/material-outlined/24/000000/github.png";
    const linkedinIcon = "https://img.icons8.com/material-outlined/24/000000/linkedin.png";
    //links
    const githubLink = 'https://github.com/Omar-Gebal';
    const linkedinLink = 'https://www.linkedin.com/in/omar-emad-3963801b4/';
    return(
        //make a footer with github icon and link and website made by omar emad
        <footer>
            <p>website made by omar emad</p>
            <a href={githubLink} target='_blank' rel='noreferrer'> <img src={githubIcon} alt='github link'/> </a>
            <a href={linkedinLink} target='_blank' rel='noreferrer'> <img src={linkedinIcon} alt='linkedin link'/> </a>
        </footer>
    )
}


