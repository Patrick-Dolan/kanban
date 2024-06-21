import Button from "./components/shared/Button";
import InputField from "./components/shared/formfields/InputField";
import SubtaskCheckbox from "./components/shared/formfields/SubtaskCheckbox";
import Heading from "./components/shared/typography/Heading";
import Paragraph from "./components/shared/typography/Paragraph";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const { toggleTheme } = useTheme();
  const [task1, setTask1] = useState(false);
  const [task2, setTask2] = useState(true);
  const [task3, setTask3] = useState(false);
  const [inputFieldTest1, setInputFieldTest1] = useState("");
  const [inputFieldTest2, setInputFieldTest2] = useState("");
  const [testError, setTestError] = useState<string | null>(null);

  const handleInputFieldTest = (value: string) => {
    if (value.length < 1) {
      setTestError("Can't be empty");
      setInputFieldTest2(value);
    } else {
      setTestError(null);
      setInputFieldTest2(value);
    }
  }

  return (
    <div className="space-y-8 min-h-screen dark:bg-black-3 dark:text-white px-6 py-20">
      <h1 className="text-center">KanBan</h1>
      <hr />
      <Button text="Dark/Light" onClick={toggleTheme} />
      <div className="space-y-4">
        <h2>Colors:</h2>
        <div className="flex">
          <div className="bg-primary h-10 w-10"></div>
          <div className="bg-primary-light h-10 w-10"></div>
          <div className="bg-secondary h-10 w-10"></div>
          <div className="bg-secondary-light h-10 w-10"></div>
          <div className="bg-black-1 h-10 w-10"></div>
          <div className="bg-black-2 h-10 w-10"></div>
          <div className="bg-black-3 h-10 w-10"></div>
          <div className="bg-black-4 h-10 w-10"></div>
          <div className="bg-gray h-10 w-10"></div>
          <div className="bg-light-gray h-10 w-10"></div>
          <div className="bg-white h-10 w-10"></div>
          <div className="bg-off-white h-10 w-10"></div>
        </div>
      </div>
      <div className="space-y-4">
        <h2>Typography</h2>
        <Heading text="Heading (XL)" size="xl" />
        <Heading text="Heading (LG)" size="lg" />
        <Heading text="Heading (MD)" size="md" />
        <Heading text="Heading (SM)" size="sm" />
        <Paragraph text="Paragraph (LG)" type="lg" />
        <Paragraph text="Paragraph (MD)" type="md" />
      </div>
      <div className="space-y-4">
        <h2>Interactive Elements</h2>
        <Button text="Button Primary (L)" variant="primary" size="lg" />
        <Button text="Button Primary (S)" variant="primary" size="sm" />
        <Button text="Button Secondary" variant="secondary" />
        <Button text="Button Destructive" variant="destructive" />
        <SubtaskCheckbox task="Idle" checked={task1} onClick={() => setTask1(prev => !prev)} />
        <SubtaskCheckbox task="Completed" checked={task2} onClick={() => setTask2(prev => !prev)} />
        <SubtaskCheckbox 
          task="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est tenetur exercitationem magni, temporibus dolor voluptatem beatae et quae, natus nesciunt nemo accusantium aut facilis repudiandae excepturi doloremque quaerat suscipit." 
          checked={task3} 
          onClick={() => setTask3(prev => !prev)} 
        />
        <InputField 
          label="Task" 
          placeholder="Enter task" 
          type="text" 
          value={inputFieldTest1} 
          onChange={(e) => setInputFieldTest1(e.target.value)} 
        />
        <InputField 
          label="Task with error handling" 
          placeholder="Enter task" 
          type="text" 
          value={inputFieldTest2} 
          errorMessage={testError}
          onChange={(e) => handleInputFieldTest(e.target.value)} 
        />
      </div>
    </div>
  )
}

export default App;