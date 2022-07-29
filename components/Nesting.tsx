import { React } from '../deps.tsx';

const Nesting = (props:any) => {

  const [nesting, setNesting] = React.useState(false);
  
  return (

      <div
        id='nesting-div'
        onDragOver={enableDropping}
        onDrop={handleDrop}
        onDragEnter={handleDragOverStart}
        onDragLeave={handleDragOverEnd}
      >
        Place nested elements here
      </div>
   
  )
};

export default Nesting;
