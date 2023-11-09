import styles from './SuccessMessage.module.css';

const SuccessMessage = () => {
  return (
    <div className={styles.succesMessage}>
        <h2>Yay!</h2>
        <p>Your order has been successfully processed.</p>
        <p>We will send you a confirmation email in a few minutes.</p>
    </div>
  );
}

export default SuccessMessage;