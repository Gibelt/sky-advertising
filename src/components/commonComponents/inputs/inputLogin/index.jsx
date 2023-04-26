import s from './style.module.css'

export default function InputLogin({ children, width, onChange, type }) {
  return (
    <input className={s.input} type={type} style={{ width }} placeholder={children} onChange={onChange} />
  )
}
