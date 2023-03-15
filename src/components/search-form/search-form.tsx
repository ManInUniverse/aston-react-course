type Props = {
  onFormSubmit: () => void;
  onInputChange: (value: HTMLInputElement['value']) => void;
  inputValue: HTMLInputElement['value'];
};

export const SearchForm = ({ onFormSubmit, onInputChange, inputValue }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit();
      }}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <input
          onChange={(e) => onInputChange(e.target.value)}
          value={inputValue}
          type="text"
          id="search"
          className="bg-gray-700 border border-gray-600 text-white text-lg rounded-lg block w-full pl-10 p-2 placeholder-gray-400"
          placeholder="Search pictures..."
          required
        />
      </div>

      <button type="submit" className="hidden">
        Search
      </button>
    </form>
  );
};
