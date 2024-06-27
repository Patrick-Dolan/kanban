import { Task } from '../../../interfaces';
import DropdownList from '../../shared/formfields/DropdownList';
import SubtaskCheckbox from '../../shared/formfields/SubtaskCheckbox';
import Heading from '../../shared/typography/Heading';
import Paragraph from '../../shared/typography/Paragraph';

function TaskDetails({ task }: { task: Task }) {
  const totalTasks = task.subtasks.length;
  const subtasksCompleted = task.subtasks.filter((subtask) => subtask.isCompleted).length;
  console.log(task);

  function handleSubtaskClick() {
    console.log('Subtask clicked:');
  }

  function handleTaskStatusChange() {
    console.log('Task status change clicked:');
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Heading text={task.title} size="lg" />
        {/* TODO set up menu from button */}
        <img src="/public/assets/icon-vertical-ellipsis.svg" alt="Vertical Ellipsis menu" />
      </div>
      <Paragraph text={task.description} type="md" className="text-gray" />
      <div>
        <Paragraph
          text={`Subtasks (${subtasksCompleted} of ${totalTasks})`}
          type="md"
          className="mb-4"
        />
        <ul className="space-y-2">
          {task.subtasks.map((subtask, index) => (
            <li key={subtask.title + index}>
              <SubtaskCheckbox
                task={subtask.title}
                checked={subtask.isCompleted}
                onClick={handleSubtaskClick}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* TODO Fix dropdown not showing outside of modal */}
      <DropdownList
        label="Current Status"
        selectedOption={task.status}
        handleDropdownStateChange={handleTaskStatusChange}
      />
    </div>
  );
}

export default TaskDetails;
