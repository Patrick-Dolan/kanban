import { useBoardContext } from '../../context/BoardContext';

function KanBanBoard() {
  const { currentBoard } = useBoardContext();
  return <div>{currentBoard.name}</div>;
}

export default KanBanBoard;
