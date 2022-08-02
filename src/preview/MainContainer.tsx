import { React } from '../../deps.tsx';
import CodePreview from './pages/CodePreview.tsx';
import IslandPreview from './pages/IslandPreview.tsx';
import { IPreviewProps, IPreviewMainContainerProps } from './../utils/types.ts';

const MainContainer: any = (props: (IPreviewProps & IPreviewMainContainerProps)) => {
  const { previewPage, setPreviewPage, elementsArr, setElementsArr } = props;

  let page: any;

  if (previewPage === 'codePreview') page = <CodePreview elementsArr={elementsArr} setElementsArr={setElementsArr}  />;
  if (previewPage === 'islandPreview') page = <IslandPreview elementsArr={elementsArr} setElementsArr={setElementsArr} />;
  
  return <div className="previewPage">{page}</div>;
};

export default MainContainer;