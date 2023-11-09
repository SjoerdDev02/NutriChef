import styles from './Time.module.css';

const Time = ({ time }: { time: number }) => {
    return (
        <article className={styles.timeContainer}>
            <p>{time} min</p>
            <img src='/icons/overig/clock.svg' alt='Icon of a clock' />
        </article>
    );
}

export default Time;