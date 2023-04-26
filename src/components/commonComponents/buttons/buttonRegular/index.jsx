import cn from 'classnames'
import s from './style.module.css'

export default function ButtonRegular({
  children,
  width,
  height,
  fontSize,
  fontWeight,
  transparent,
  onClick,
  disabled,
}) {
  const buttonClass = cn(s.button, {
    [s.transparent]: transparent,
  })
  return (
    <button
      className={buttonClass}
      type='button'
      style={{ width, height, 'font-weight': fontWeight, 'font-size': fontSize }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
