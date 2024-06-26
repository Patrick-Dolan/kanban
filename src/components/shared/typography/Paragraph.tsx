interface ParagraphProps {
  type: string;
  text: string;
  className?: string;
}

function Paragraph({ type, text, className = '' }: ParagraphProps) {
  let classes = className;
  switch (type) {
    case 'lg':
      classes += ' text-13px font-medium leading-5.75';
      break;
    case 'md':
      classes += ' text-xs font-bold leading-3.75';
      break;
    default:
      classes += ' text-13px font-medium leading-5.75';
      break;
  }
  return <p className={classes}>{text}</p>;
}

export default Paragraph;
