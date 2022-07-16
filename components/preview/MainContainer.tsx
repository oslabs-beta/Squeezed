import { React } from '../../deps.tsx';
import CodePreview from './pages/CodePreview.tsx';
import IslandPreview from './pages/IslandPreview.tsx';

const MainContainer: any = (props: any) => {

  const { previewPage, setPreviewPage } = props;

  let page: any;

  if (previewPage === 'codePreview') page = <CodePreview />;
  if (previewPage === 'islandPreview') page = <IslandPreview />;
  
  return <div className="previewPage">{page}</div>;
};

export default MainContainer;