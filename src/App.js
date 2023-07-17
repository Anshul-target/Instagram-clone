// import logo from './logo.svg';
// import './App.css';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from "./constants/routes";

// It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries.Lazy loading is the technique of rendering only - needed or critical user interface items first, then quietly unrolling the non - critical items later.It is now fully integrated into core react library itself.We formerly used react - loadable to achieve this but now we have react.lazy() in react core.
const Login = lazy(() => import("./pages/login"));  //It is a login component
function App() {
  return (

    <Router>
      <Routes>
        {/* <Suspense fallback={<p>Loading...</p>}></Suspense> */}

        {/* Certainly! In React Router version 6, the Route component's component prop has been replaced with the element prop. The element prop expects a React element or component to be rendered when the route matches.

        In the updated code, we are using the element prop to render the Login component while also wrapping it with the Suspense component for lazy loading. Here's a breakdown of the code: */}

        {/* <Route path={ROUTES.LOGIN} element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} /> */}

        {/* element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>}: The element prop is set to a JSX expression, which represents the component to be rendered when the route matches.

        <Suspense fallback={<p>Loading...</p>}>: The Suspense component is used to wrap the Login component for lazy loading. The fallback prop specifies the JSX element to be displayed while the Login component is being loaded. In this case, it shows a simple "Loading..." text inside a paragraph tag.

          <Login />: This represents the Login component itself. It is included inside the Suspense component so that it is rendered once it has been lazily loaded.

          By using the element prop and wrapping the Login component with Suspense, we ensure that the Login component is lazily loaded and displayed while showing the fallback loading UI until it is fully loaded. */}



        <Route path={ROUTES.LOGIN} element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
      </Routes>
    </Router>


    // Suspense is a component required by the lazy function basically used to wrap lazy components.Multiple lazy components can be wrapped with the suspense component.It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.


  );
}

export default App;
