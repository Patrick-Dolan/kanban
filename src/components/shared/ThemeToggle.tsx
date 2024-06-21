import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center bg-off-white rounded-md dark:bg-black-2 transition-colors duration-1000">
      <div className="flex justify-center items-center gap-6 py-3.5">
        <img src="/assets/icon-light-theme.svg" alt="Light theme icon." />
        <div
          onClick={toggleTheme}
          className="w-10 h-5 rounded-full bg-primary flex items-center cursor-pointer dark:justify-end"
        >
          <div className="w-3.5 h-3.5 rounded-full bg-white mx-1 transition-transform duration-300"></div>
        </div>
        <img src="/assets/icon-dark-theme.svg" alt="Dark theme icon." />
      </div>
    </div>
  )
}

export default ThemeToggle;