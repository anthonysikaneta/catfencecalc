export default function Input({
  disabled = false,
  holder = '',
  onChange,
  options,
  title = '',
  type = 'text',
  value,
}) {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {type === 'number' ? (
          <input
            type={type}
            name="price"
            id="price"
            className={
              disabled
                ? 'block w-full rounded-md border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm'
                : 'block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            }
            disabled={disabled}
            placeholder={holder}
            onChange={onChange}
            min={1}
            max={100}
            value={value}
          />
        ) : (
          <input
            type={type}
            name="measurement"
            id="measurement"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder={holder}
            onChange={onChange}
          />
        )}
        {options && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="measurement-type" className="sr-only">
              {title}
            </label>
            <select
              id="measurement-type"
              name="measurement-type"
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={onChange}
            >
              {options.map((o, index) => (
                <option key={index}>{o}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  )
}
