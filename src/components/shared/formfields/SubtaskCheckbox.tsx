interface SubtaskCheckboxProps {
  task: string;
  checked: boolean;
  onClick: () => void;
}

function SubtaskCheckbox({ task, checked, onClick }: SubtaskCheckboxProps) {
  return (
    <div
      className={`grid grid-cols-[auto_1fr] items-center gap-4 p-3 min-h-10 w-full rounded-md dark:bg-black-2 hover:cursor-pointer ${!checked && 'hover:bg-primary hover:bg-opacity-25 dark:hover:bg-primary dark:hover:bg-opacity-25'}`}
      onClick={onClick}
    >
      <div
        className={`h-4 w-4 rounded-sm ${checked ? 'bg-primary flex justify-center items-center' : 'bg-white dark:bg-black-3 ring-1 ring-inset ring-gray ring-opacity-25'}`}
      >
        {checked && <img src="/assets/icon-check.svg" alt="Checkmark" />}
      </div>
      <p className={`font-bold text-xs ${checked && 'line-through opacity-50'}`}>{task}</p>
    </div>
  );
}

export default SubtaskCheckbox;
