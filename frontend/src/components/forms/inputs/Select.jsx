function Select ({
  label,
  value,
  onChange,
  options,
  ...props
}) {
  return (
    <label className='flex flex-col gap-0.5'>
      {label} :
      <select
        {...props}
        onChange={onChange}
        value={value}
        className='border-2 border-neutral-200 rounded-md py-1 px-1 focus:border-neutral-400 hover:border-neutral-400 focus-visible:border-neutral-400 outline-0 transition-all duration-200'
      >
        {
          options.map(
            option =>
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
          )
        }
      </select>
    </label>
  )
}

export default Select
