import React ,{useState}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter ,RouterProvider} from "react-router-dom";
import Accordion  from "./component/Heading"
import StateMange from './component/StateMange';
import UseStatemange from './component/UseStateManage';
import Usememo from './component/Usememo';
import UseRef from './component/UseRef';
import UseContextData from "./component/UseContext"
import UseContsecond from './component/UseCont-2nd';
import { context } from './component/UseContext';
import DefaultContextValue from './component/defaultContextValue';
import Hoc2 from './component/HOC/hoc2';
import Memo1 from './component/memo/Memo1';
import FirstDay from './outputQuestion/FirstDay';
import Second from './outputQuestion/Second';
import Third from './outputQuestion/Third';
import Four from "./outputQuestion/Four"
import Fifth from './outputQuestion/Fifith';
import Sixth from './outputQuestion/sixth';
import Seven from './outputQuestion/Seven';
const root = ReactDOM.createRoot(document.getElementById('root'))

const AppStore=()=>{
let [a , setA] =useState("jjjd")
let b=0

return(
  <>
  <DefaultContextValue/>
    <context.Provider value={{a,setA}} > 
 <UseContextData/>
 <UseContsecond/>
</context.Provider>


 {
 /*


  <Accordion/>
<App/>
<UseStatemange/>
<StateMange/>
<Usememo/>
<UseRef/>
*/
 }


</>
)

}



const routing=createBrowserRouter([
  {path:"/",
   element:<AppStore/>

}
,{
  path:"/hoc",
  element:<Hoc2/>
},
{
  
  path:"/ref",
  element:<UseRef/>
}
,
{
  path:'/state',
   element:<StateMange/>
}

,

{
  path:"/memo",
  element:<Usememo/>
},
{
  path:'/memos',
   element:<Memo1/>
},

{
  path:"/output",
  element:<FirstDay/>
}
,
{
  path:"/out",
  element:<Second/>
},
{
  path:"/fifth",
  element:<Seven/> 
}


])





root.render(<RouterProvider router={routing}/> )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
