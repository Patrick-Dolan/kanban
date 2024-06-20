import Button from "./components/shared/Button";
import Heading from "./components/shared/typography/Heading";
import Paragraph from "./components/shared/typography/Paragraph";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="space-y-8 min-h-screen dark:bg-black-2 dark:text-white">
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
      </div>
    </div>
  )
}

export default App;