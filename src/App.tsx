import MobileHeader from './components/dashboard/MobileHeader';
import KanBanBoard from './components/boards/KanBanBoard';

function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-black-2 dark:text-white">
      <header>
        <MobileHeader />
      </header>
      <main className="flex-grow bg-off-white dark:bg-black-2">
        <KanBanBoard />
      </main>
    </div>
  );
}

export default App;
