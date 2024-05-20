import styles from './Button.module.css'

interface ButtonProps {
    label: string,
    bgColorBlue?: boolean,
    onClick?: (e: any) => void,
}
function Button({label, bgColorBlue, onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.reusable_btn} ${bgColorBlue ? styles.reusable_btn_blue : ''}`}>
        <span className={bgColorBlue ? styles.reusable_font_white : styles.reusable_font_dark}>{label}</span>
    </button>
  )
}

export default Button