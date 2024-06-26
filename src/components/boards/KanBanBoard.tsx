import { useBoardContext } from '../../context/BoardContext';
import Column from './Column';

function KanBanBoard() {
  const { currentBoard } = useBoardContext();
  return (
    <div className="px-4 pt-6 flex gap-6 overflow-x-auto">
      {currentBoard?.columns.map((column, index) => (
        <Column key={column.name + index} column={column} />
      ))}
    </div>
  );
}

export default KanBanBoard;
