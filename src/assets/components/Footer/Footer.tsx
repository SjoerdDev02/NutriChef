import styles from './Footer.module.css';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    const mailIcon = '/icons/footer/mail.svg';
    const linkedInIcon = '/icons/footer/linkedin.svg';
    const instagramIcon = '/icons/footer/instagram.svg';
    const githubIcon = '/icons/footer/github.svg';

    return (
        <footer className={styles.footerStyles}>
            <div className={styles.divider}></div>
            <NavLink to='/'><h1>Nutri<span>Chef</span></h1></NavLink>
            <div className={styles.socials}>
                <Link to='mailto:sjoerd.kessels2002@gmail.com'><img src={mailIcon} alt='Icon of email' /></Link>
                <Link to='https://www.linkedin.com/in/sjoerd-kessels-380a4928a/'><img src={linkedInIcon} alt='Logo of LinkedIn' /></Link>
                <Link to='https://www.instagram.com/sjoerd_02/'><img src={instagramIcon} alt='Logo of Instagram' /></Link>
                <Link to='https://github.com/SjoerdDev02/'><img src={githubIcon} alt='Logo of Github' /></Link>
            </div>
        </footer>
    );
}

export default Footer;