import s from './style.module.css'

export default function ButtonInHeader({ children, onClick }) {
  return (
    <button className={s.button} type='button' onClick={onClick}>
      {children}
    </button>
  )
}
