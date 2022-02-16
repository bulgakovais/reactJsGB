import classnames from 'classnames';
import styles from './button.module.css'

console.log(styles)

export const Button = (props) => {
    let classNames = classnames(styles.btn, styles.text_color);
    return (
        <button onClick={props.onClick} className={classNames}>{props.text}</button>
    )
}