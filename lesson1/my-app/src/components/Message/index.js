import styles from './message.module.css';
console.log(styles)

export const Message = (props) => {
    console.log(props)
    return (
        <div>
            <p className={styles.text}>{props.children}</p>
            <h1 className={styles.text2}>{props.text}</h1>
        </div>
    );
}