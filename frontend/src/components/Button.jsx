function Button ({ children, variant = 'default', ...props }) {
  let color
  switch (variant) {
    case 'success':
      color = 'bg-green-400 hover:bg-green-200'
      break
    case 'danger':
      color = 'bg-red-400 hover:bg-red-200'
      break
    case 'warning':
      color = 'bg-orange-400 hover:bg-orange-200'
      break
    case 'info':
      color = 'bg-blue-400 hover:bg-blue-200'
      break
    case 'default':
    default:
      color = 'bg-gray-400 hover:bg-gray-200'
      break
  }
  return (
    <button
      className={`${color} px-4 py-2 rounded-lg cursor-pointer shadow-md transition-all duration-300`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
