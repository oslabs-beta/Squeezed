import { fs } from "https://esm.sh/file-system";

//inside of styling, invoke the following: writeToFile(createFreshCode(currentElement)) in Styling component
const createFreshCode = (elementType) => {
    const returnStr =`
    <${elementType}>
      Created a ${elementType}
    </ ${elementType}>`;
    console.log("inside createFreshCode, code is: ", returnStr);
    return returnStr;
  }
  
// const writeToFile = async (freshCode) => {
const writeToFile = async() => {
console.log("inside writeToFile");
// const decoder = new TextDecoder("utf-8");
// const text = await Deno.writeTextFile(`../../../../txtFiles/test.txt`, freshCode);
// return text;
  const text = await fs.writeFile("./write.txt", "Writing to File", (err) => {
    if(err) {
      console.log(err);
    }
    else {
      console.log(fs.readFileSync("write.txt", "utf8"));
    }
  });
};

export { createFreshCode, writeToFile };