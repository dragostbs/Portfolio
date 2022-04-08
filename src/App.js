import Navbar from "./components/html/Navbar";
import Secondpage from "./components/html/Secondpage";
import Fourthpage from "./components/html/Fourthpage";
import Fifthpage from "./components/html/Fifthpage";
import Thirdpage from "./components/html/Thirdpage";
import Firstpage from "./components/html/Firstpage";

function App() {
  return (
    <body>
      <Navbar />
      <main>
        <Firstpage />
        <Secondpage />
        <Thirdpage />
        <Fourthpage />
        <Fifthpage />
      </main>
    </body>
  );
}

export default App;
