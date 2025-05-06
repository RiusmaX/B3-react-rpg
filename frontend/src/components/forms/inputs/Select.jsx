function Select ({
  label,
  value,
  onChange,
  options,
  className = '',
  ...props
}) {
  return (
    <label className='flex flex-col gap-1 text-gray-200 w-full'>
      {label && <span className='mb-1 text-sm font-fantasy text-green-200'>{label}</span>}
      <select
        {...props}
        onChange={onChange}
        value={value}
        className={`bg-green-900/70 border-2 border-green-400/30 rounded-md py-2 px-3 text-green-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 outline-none transition-all duration-200 ${className}`}
      >
        {
          options.map(
            option =>
              <option key={option.value} value={option.value} className='bg-green-900 text-green-100 font-fantasy'>
                {option.label}
              </option>
          )
        }
      </select>
    </label>
  )
}

export default Select
