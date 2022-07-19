import { React } from '../../../deps.tsx';
// import { setup, tw } from '../../../deps.tsx';

type submitForm = {
  text: string;
};

const Styling: any = (props:any) => {
  // push all of theses states into CodePreview ??? 
  //then do `${states}` to apple the changes inline ?

  const { currentElement, setCurrentElement } = props;

  const [inputText, setInputText] = (React as any).useState('');
  const [textAlign, setTextAlign] = (React as any).useState('');
  const [textDecoration, setTextDecoration] = (React as any).useState('');
  const [backgroundColor, setBackgroundColor] = (React as any).useState('');
  const [color, setColor] = (React as any).useState('');
  const [margin, setMargin] = (React as any).useState('');
  const [width, setWidth] = (React as any).useState('');
  const [height, setHeight] = (React as any).useState('');
  const [padding, setPadding] = (React as any).useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`form submitted`);  

    // setInputText(inputText);
    // textAlign(setTextAlign);
    // textDecoration(setTextDecoration);
    // backgroundColor(setBackgroundColor);
    // color(setColor);
    // margin(setMargin);
    // height(setHeight);
    // width(setWidth);
    // padding(setPadding);
    // if (this.validateForm()) {
    //   const submitSuccess: boolean = await this.submitForm();
    //   this.setState({ submitSuccess });
    // }
  };

console.log('working', currentElement)
//   /**
//    * Executes the validation rules for all the fields on the form and sets the error state
//    * @returns {boolean} - Whether the form is valid or not
//    */
//    const validateForm(): boolean {
//     // TODO - validate form
//     return true;
//   }

//   /**
//    * Submits the form to the http api
//    * @returns {boolean} - Whether the form submission was successful or not
//    */
//    const async submitForm(): Promise<boolean> {
//     // TODO - submit the form
//     return true;
//   }

    return (
      <form onSubmit={handleSubmit} style={{fontSize: '20px', fontWeight: 'bolder', color: 'white'}}>
<div style={{fontSize: '26px', textDecoration: 'underline',textAlign:'center'}}>Element selected: {currentElement}</div>
<br></br>
<div style={{marginLeft: '100px'}}>
        <label htmlFor="inputText">Text </label>  
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Enter text"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}

        /> 
        <br />

        <label htmlFor="textAlign">Text Align </label>
        <select onChange={e => setTextAlign(e.target.value)} style={{backgroundColor: '#68EDA7', color: 'black'}}
>
          <option>center</option>
          <option>right</option>
          <option>left</option>
          <option>justify</option>
          <option>justify</option>
        </select>
        <br />

        <label htmlFor="textDecoration">Text Decoration </label>
        <select onChange={e => setTextDecoration(e.target.value)} style={{backgroundColor: '#68EDA7', color: 'black'}}
>
          <option>overline</option>
          <option>line-through</option>
          <option>underline</option>
          <option>none</option>
        </select>
        <br />

        <label htmlFor="backgroundColor">Background Color </label>  
        <input
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          type="text"
          placeholder="Enter hex color code"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}

        /> 
        <br />

        <label htmlFor="color">Text Color </label>  
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="text"
          placeholder="Enter hex color code"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}
        /> 
        <br />
        </div>
        <div style={{float: 'right', marginTop: '-120px', marginRight: '100px'}}>
        <label htmlFor="margin">Margin </label>  
        <input
          value={margin}
          onChange={(e) => setMargin(e.target.value)}
          type="text"
          placeholder="Enter margin value"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}

        /> 
        <br />

        <label htmlFor="height">Height </label>  
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="text"
          placeholder="Enter height"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}

        /> 
        <br />

        <label htmlFor="width">Width </label>  
        <input
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          type="text"
          placeholder="Enter width"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}

        /> 
        <br />

        <label htmlFor="padding">Padding </label>  
        <input
          value={padding}
          onChange={(e) => setPadding(e.target.value)}
          type="text"
          placeholder="Enter padding"
          className="input"
          style={{backgroundColor: '#68EDA7', color: 'black'}}

        /> 
        <br />
</div>
<br></br>
        <button type="submit" className="btn"  style={{marginLeft: '50%', backgroundImage: "linear-gradient(#68EDA7, #FFE958)", fontSize: '20px'}}>
          Submit
        </button>

      </form>
    );
};



export default Styling;

