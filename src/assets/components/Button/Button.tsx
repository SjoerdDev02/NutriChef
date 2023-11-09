import styles from './Button.module.css';

const Button = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => {
  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  );
}

export default Button;