type Props = {
  onToggle: () => void;
  checked: boolean;
};

export const Toggler = ({ onToggle, checked }: Props) => {
  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onChange={onToggle}
          checked={checked}
          type="checkbox"
          value=""
          className="sr-only peer"
        />

        <div className="w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-50 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[#F9CC0B]"></div>
      </label>
    </div>
  );
};
