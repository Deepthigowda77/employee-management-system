// import Navbar from "./components/Navbar";
// import AppRoutes from "./routes/AppRoutes";
// import PerformanceExample from "./components/PerformanceExample";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <AppRoutes />
//       <PerformanceExample />
//     </>
//   );
// }

// export default App;




// import PerformanceExample from "./components/PerformanceExample";

// function App() {
//   return (
//     <PerformanceExample />
//   );
// }

// export default App;


// import UseCallbackExample from "./components/UseCallbackExample";

// function App() {
//   return (
//     <div>
//       <UseCallbackExample />
//     </div>
//   );
// }

// export default App;


// import Navbar from "./components/Navbar";
// import AppRoutes from "./routes/AppRoutes";

// function App() {

//   return (
//     <>
//       <Navbar />
//       <AppRoutes />
//     </>
//   );
// }

// export default App;


// import PerformanceExample from "./components/PerformanceExample";

// function App() {
//   return <PerformanceExample />;
// }

// export default App;

// import AppRoutes from "./routes/AppRoutes";
// import { useTheme } from "./context/ThemeContext";

// function App() {
//   const { darkMode } = useTheme();

//   return (
//     <div className={darkMode ? "app dark-mode" : "app"}>
//       <Navbar />

//       <AppRoutes />
//     </div>
//   );
// }


import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      {/* <Navbar /> */}

      <AppRoutes />
    </div>
  );
}

export default App;