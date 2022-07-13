import { React } from '../deps.ts';
import SideBar from './SideBar.tsx';
import DragAndDrop from './DragAndDrop.tsx';
import Customization from './Customization.tsx';
import Preview from './Preview.tsx';
import Buttons from './Buttons.tsx';

const App = () => {
  // not sure if we need this and react router, going with just react router for now
  // const [page, setPage] = (React as any).useState('home');

  return (
    <div className="app">
      <SideBar />
      <DragAndDrop />
      <Customization />
      <Preview />
      <Buttons />
    </div>
  );
};

export default App;