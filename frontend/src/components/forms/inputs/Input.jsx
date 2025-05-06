function Input ({
  label,
  value,
  onChange,
  onChangeText,
  className = '',
  ...props
}) {
  const handleChange = (event) => {
    if (onChange) onChange(event)
    if (onChangeText) onChangeText(event.target.value)
  }

  return (
    <label className='flex flex-col gap-1 text-gray-200 w-full'>
      {label && <span className='mb-1 text-sm font-medium'>{label}</span>}
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className={`bg-gray-800 border-2 border-gray-700 rounded-md py-2 px-3 text-gray-100 placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition-all duration-200 ${className}`}
      />
    </label>
  )
}

export default Input
