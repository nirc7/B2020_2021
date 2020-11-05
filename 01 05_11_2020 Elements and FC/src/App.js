//import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './FunctionalComponents/FCStudent';

const App =
  <div className="styNir">
    {EHeader}
    {console.log(1)}

    <FCStudent  id={7} name="avi" inRup={true}/>
    <FCStudent  id={8} name="ben" inRup={false}/>

    <div>hello world!1</div>
    <div>hello world!2</div>
  </div>;
// const App2  = <div>hello world!2</div>;
// const App3  = <div>hello world!3</div>;
export default App;
