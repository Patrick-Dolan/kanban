import IconBoard from '../../assets/IconBoard';
import Heading from '../shared/typography/Heading';
import { useBoardContext } from '../../context/BoardContext';

interface BoardSwitcherProps {
  closeMenu: () => void;
}

function BoardSwitcher({ closeMenu }: BoardSwitcherProps) {
  const { boards, currentBoard, switchCurrentBoard } = useBoardContext();

  function handleBoardSwitch(projectName: string) {
    switchCurrentBoard(projectName);
    closeMenu();
  }

  return (
    <div>
      <p className="font-bold uppercase text-gray text-xs pt-4 mb-5 mx-6 tracking-2.4px">
        All boards ({boards.length})
      </p>
      <div className="mr-6">
        <ul>
          {boards?.map((project, index) => {
            const iconFill = currentBoard.name === project.name ? '#FFF' : '#828FA3';
            const selectedProject = currentBoard.name === project.name;
            return (
              <li
                className={`flex items-center gap-3 p-4 cursor-pointer ${selectedProject && 'bg-primary rounded-r-full'}`}
                key={project.name + index}
                onClick={() => handleBoardSwitch(project.name)}
              >
                <IconBoard fill={iconFill} />
                <Heading
                  text={project.name}
                  size="md"
                  className={`${selectedProject ? 'text-white' : 'text-gray'}`}
                />
              </li>
            );
          })}
        </ul>
        <div
          className="flex items-center gap-3 p-4 cursor-pointer"
          onClick={() => alert('Create new board clicked.')}
        >
          <IconBoard fill="#635FC7" />
          <div>
            <Heading text="+ Create New Board" size="md" className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardSwitcher;
