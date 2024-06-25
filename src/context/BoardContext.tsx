import { ReactNode, createContext, useContext, useState } from "react";
import data from "../data.json";

interface Subtask {
  title: string;
  isCompleted: boolean;
}

interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

interface Column {
  name: string;
  tasks: Task[];
}

interface Board {
  name: string;
  columns: Column[];
}

interface BoardContextType {
  boards: Board[];
  currentBoard: Board;
  switchCurrentBoard: (boardName: string) => void;
}

const defaultContextValue: BoardContextType = {
  boards: data.boards,
  currentBoard: data.boards[0] || { name: "Default Board", columns: [] },
  switchCurrentBoard: () => {
    console.error("switchCurrentBoard function is not implemented");
  }
};

const BoardContext = createContext<BoardContextType>(defaultContextValue);

export const BoardContextProvider = ({ children }: { children: ReactNode }) => {
  const [boards] = useState<Board[]>(defaultContextValue.boards);
  const [currentBoard, setCurrentBoard] = useState<Board>(defaultContextValue.currentBoard);

  // TODO remove console log when done testing context
  console.log("currentBoard", currentBoard);

  function switchCurrentBoard(boardName: string) {
    setCurrentBoard(boards.find((board) => board.name === boardName) || boards[0]);
  }

  return (
    <BoardContext.Provider 
      value={{
        boards,
        currentBoard,
        switchCurrentBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useBoardContext() {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardContextProvider");
  }
  return context;
}
