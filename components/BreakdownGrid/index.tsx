type BreakdownGridProps = {
  title?: string;
  oneRepMax: string;
  showFives: boolean;
  setShowFives: (showFives: boolean) => void;
  className?: string;
};

const BreakdownGrid = ({
  title,
  oneRepMax,
  showFives,
  setShowFives,
  className,
}: BreakdownGridProps) => {
  return (
    <div className={`${className} p-3 rounded shadow lg:shadow-lg lg:p-6`}>
      {title && <h1 className="text-md lg:text-xl font-bold">{title}</h1>}
      <p className="mb-4 text-sm">Rounded to the nearest whole number</p>
      <div className="flex items-center mb-2">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={showFives}
          onClick={() => setShowFives(!showFives)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium">
          Show increments of 5%
        </label>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      %
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Weight
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      100%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {oneRepMax}kg
                    </td>
                  </tr>
                  {showFives && (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        95%
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {Math.round((Number(oneRepMax) / 100) * 95)}kg
                      </td>
                    </tr>
                  )}
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      90%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {Math.round((Number(oneRepMax) / 100) * 90)}kg
                    </td>
                  </tr>
                  {showFives && (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        85%
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {Math.round((Number(oneRepMax) / 100) * 85)}kg
                      </td>
                    </tr>
                  )}
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      80%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {Math.round((Number(oneRepMax) / 100) * 80)}kg
                    </td>
                  </tr>
                  {showFives && (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        75%
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {Math.round((Number(oneRepMax) / 100) * 75)}kg
                      </td>
                    </tr>
                  )}
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      70%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {Math.round((Number(oneRepMax) / 100) * 70)}kg
                    </td>
                  </tr>
                  {showFives && (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        65%
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {Math.round((Number(oneRepMax) / 100) * 65)}kg
                      </td>
                    </tr>
                  )}
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      60%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {Math.round((Number(oneRepMax) / 100) * 60)}kg
                    </td>
                  </tr>
                  {showFives && (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        55%
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {Math.round((Number(oneRepMax) / 100) * 55)}kg
                      </td>
                    </tr>
                  )}
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      50%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {Math.round((Number(oneRepMax) / 100) * 50)}kg
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakdownGrid;
