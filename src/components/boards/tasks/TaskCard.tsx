import { useState } from 'react';
import type { Task } from '../../../interfaces';
import Modal from '../../shared/Modal';
import Heading from '../../shared/typography/Heading';
import Paragraph from '../../shared/typography/Paragraph';
import TaskDetails from './TaskDetails';

function TaskCard({ task }: { task: Task }) {
  const [openDetails, setOpenDetails] = useState(false);
  const totalTasks = task.subtasks.length;
  const subtasksCompleted = task.subtasks.filter((subtask) => subtask.isCompleted).length;

  return (
    <>
      <div
        className="bg-white px-4 py-6 rounded-lg shadow-md mb-4 min-h-22 space-y-2 dark:bg-black-3"
        onClick={() => setOpenDetails(true)}
      >
        <Heading text={task.title} size="md" />
        <Paragraph
          text={`${subtasksCompleted} of ${totalTasks} subtasks`}
          type="md"
          className="text-gray"
        />
      </div>
      {/* Details */}
      <Modal open={openDetails} setOpen={setOpenDetails}>
        <TaskDetails task={task} />
      </Modal>
    </>
  );
}

export default TaskCard;
