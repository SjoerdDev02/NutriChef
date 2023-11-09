import styles from './CtaButton.module.css';
import { NavLink } from 'react-router-dom';

const CTAButton = ({ children, page }: { children: React.ReactNode, page: string }) => {
    return <NavLink className={styles.ctaBtn} to={page}>{children}</NavLink>;
};
  
export default CTAButton;