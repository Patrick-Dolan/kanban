import { useState } from "react";

interface DropdownListProps {
  selectedOption?: string;
  handleDropdownStateChange: (option: string) => void;
}

function DropdownList({ selectedOption = "Todo", handleDropdownStateChange }: DropdownListProps) {
  const options = ["Todo", "Doing", "Done"];
  const [showOptions, setShowOptions] = useState(false);

  function handleOptionSelect(option: string) {
    handleDropdownStateChange(option);
    setShowOptions(false);
  }

  return (
    <div className="relative">
      <div 
        className={`relative flex justify-between items-center py-2 px-4 mb-2 rounded-md border border-gray border-opacity-25 font-medium text-13px leading-5.75 hover:cursor-pointer hover:border-primary ${showOptions && "border-primary border-opacity-100"}`}
        onClick={() => setShowOptions(prev => !prev)}
      >
        <p>{selectedOption}</p>
        <img src="/public/assets/icon-chevron-down.svg" alt="" />
      </div>
      {showOptions &&
        <div className="absolute w-full z-10 rounded-lg p-4 space-y-2 bg-white dark:bg-black-2">
          {options.map(option => (
            <p key={option} className="font-medium text-13px text-gray cursor-pointer" onClick={() => handleOptionSelect(option)}>{option}</p>
          ))}
        </div>
      }
    </div>
  )
}

export default DropdownList;