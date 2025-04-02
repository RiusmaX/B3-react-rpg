function Input ({
  label,
  value,
  onChange,
  onChangeText,
  ...props
}) {
  const handleChange = (event) => {
    if (onChange) onChange(event)
    if (onChangeText) onChangeText(event.target.value)
  }

  return (
    <label className='flex flex-col gap-0.5'>
      {label} :
      <input
        {...props}
        value={value}
        onChange={handleChange}
        className='border-2 border-neutral-200 rounded-md py-1 px-1 focus:border-neutral-400 hover:border-neutral-400 focus-visible:border-neutral-400 outline-0 transition-all duration-200'
      />
    </label>
  )
}

export default Input
