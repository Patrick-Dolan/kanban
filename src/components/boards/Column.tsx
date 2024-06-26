import type { Column } from '../../interfaces';
import Heading from '../shared/typography/Heading';
import Task from './Task';

function Column({ column }: { column: Column }) {
  // TODO set up dynamic colors for columns header
  return (
    <div className="w-70 flex-shrink-0">
      <div className="flex gap-3">
        <div className="h-4 w-4 bg-green-500 rounded-full"></div>
        <Heading text={`${column.name} (${column.tasks.length})`} size="sm" className="uppercase" />
      </div>
      <div className="pt-6">
        {column.tasks.map((task, index) => (
          <Task key={task.title + index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
