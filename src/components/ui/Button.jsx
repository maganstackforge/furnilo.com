const Button = ({
  label,
  onClick,
  icon: Icon,
  iconPosition = 'right', // "left" | "right"
  className = '',
  type = 'button',
}) => {
  return (
    <button type={type} onClick={onClick} className={`flex items-center gap-2 cursor-pointer ${className}`}>
      {Icon && iconPosition === 'left' && <Icon className='w-6 h-6' />}

      {label && <span>{label}</span>}

      {Icon && iconPosition === 'right' && <Icon className='' />}
    </button>
  )
}

export default Button
