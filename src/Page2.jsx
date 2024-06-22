import { useContext } from "react";
import DataProvider from "./context/Datacontext";




const Page2 = () => {
  const {name , theme} = useContext(DataProvider)
  return (
    <>
      <div className={`App ${theme}`}>
        <h1>Hello Page 2</h1>
        <h2>Welcome {name}</h2>
      </div>
    </>
  );
}

export default Page2;
