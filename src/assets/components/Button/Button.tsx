import styles from './Button.module.css';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default Button