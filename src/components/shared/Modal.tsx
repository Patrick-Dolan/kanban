interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}

// TODO look into methods for stopping tabbing outside of modal

function Modal({ children, open, setOpen } : ModalProps) {
  // If modal is open disable scrolling, else enable scrolling and return nothing
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
    return null;
  }
  return (
    <div 
      className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setOpen(false)}
    >
      <div 
        className="bg-white mx-4 w-full max-h-[70vh] overflow-y-auto rounded-lg p-6 md:mx-0 md:max-w-120 dark:text-white dark:bg-black-3"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal;