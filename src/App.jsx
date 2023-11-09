//! REACT COMPONENTS
import DemoComponent from './components/DemoComponent.jsx'
import DemoInput from './components/DemoInput.jsx'
import DemoUseStates from './components/DemoUseState.jsx'
import DemoUseEffect from './components/DemoUseEffect.jsx' 
import DemoForms from './components/DemoForms.jsx'
//* ^ Need to import components to use them

//! ROUTERS
import {
  // createRoutesFromElements //* (for lines 40-50)
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
//* ^ npm install react-router-dom: need this package installed for our routers

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <h1>Hello</h1>,
  },
  {
    path: "/demoRoute",
    element: <h2>How's it going?</h2>,
    children: [
      {
        path: '/nestedDemoRoute',
        element: <DemoInput />
      }
    ]
  },
  {
    path: '*',
    element: <h1>404 not found page</h1>
  }
])

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<h1>Hello</h1>}>
//     <Route path='nested'>
//       <Route path='nesteder' element={<DemoInput/>}>

//       </Route>
//     </Route>
//   </Route>
// ))
//? ^ Same thing as above, different Syntax



function App() {
    return (
      <div>
        <h1> Hello from App </h1>


    {/* //! DemoCode Starts: */}
{/* //? REACT COMPONENTS */}
    <DemoComponent />
    <DemoInput                       //* Custom Component  (Takes Props: JS anything we want)
      demoProp="demoProp" 
      someProp="someProp" 
      anotherProp="anotherProp" 
    />
    {/* <input demoprop="demoprop"/>  //*  Primitive Component  A.K.A "view component" (Takes Attributes: "id", "onChange", "className") */}
              {/* //* ^ lowercase, not camelCase */}

{/* //? ROUTERS */}
    <RouterProvider router={router} />
    {/* //* ^ Uses the package we installed with the "router" established on line 11 */}

{/* //? HOOKS */}
      <DemoUseStates />
      <DemoUseEffect />
      <DemoForms />
    {/* //! DemoCode End: */}


      </div>
    ) 
  }
  
export default App;