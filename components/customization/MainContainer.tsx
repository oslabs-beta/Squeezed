import { React } from '../../deps.tsx';
import Routing from './pages/Routing.tsx';
import Styling from './pages/Styling.tsx';

const MainContainer: any = (props: any) => {
  const { customizationPage, setCustomizationPage } = props;
  const { currentElement, setCurrentElement } = props;

  let page: any;

  if (customizationPage === 'styling') page = <Styling currentElement={currentElement} setCurrentElement={setCurrentElement}/>;
  if (customizationPage === 'routing') page = <Routing />;
  
  return <div className="customizationPage">{page}</div>;
};

export default MainContainer;