import ProjectSwitcher from "../projects/ProjectSwitcher";
import ThemeToggle from "../shared/ThemeToggle";
import Heading from "../shared/typography/Heading";
import { useState } from "react";

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  const menuChevronImagePath = menuOpen ? "/assets/icon-chevron-up.svg" : "/assets/icon-chevron-down.svg";
  // TODO replace with check for boards available in context
  const noBoardsAvailable = true;

  return (
    <>
      <div className="flex justify-between items-center h-16 px-6 bg-white dark:bg-black-3">
        <div className="flex items-center gap-4 cursor-pointer">
          <img src="/assets/logo-mobile.svg" alt="Mobile logo." />
          <div
            className="flex gap-2 items-center"
            onClick={menuOpen ? handleCloseMenu : () => setMenuOpen(true)}
          >
            <Heading text="Platform Launch" size="lg" />
            <img src={menuChevronImagePath} alt="Arrow down chevron icon." />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            className={`flex items-center px-4.5 py-2.5 bg-primary rounded-full ${noBoardsAvailable && "opacity-25 cursor-not-allowed"}`}
            onClick={() => alert("Add task clicked.")}
            disabled={noBoardsAvailable}
          >
            <img src="/assets/icon-add-task-mobile.svg" alt="Add task icon." />
          </button>
          <img
            src="/assets/icon-vertical-ellipsis.svg"
            alt="Menu icon."
            className="cursor-pointer"
            onClick={() => alert("Menu clicked.")}
          />
        </div>
      </div>
      {menuOpen && 
        <div 
          className="fixed top-16 right-0 bottom-0 left-0 bg-black bg-opacity-25"
          onClick={handleCloseMenu}
        >
          <div 
            className="bg-white mt-4 mx-auto w-66 rounded-lg dark:bg-black-3"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectSwitcher />
            <div className="p-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default MobileHeader;