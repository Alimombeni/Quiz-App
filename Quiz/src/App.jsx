import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";
import Start from "./components/Start.jsx";
import { DataProvider } from './context/dataContext';
function App() {
  return (
      <DataProvider>
            <Start/>
            <Quiz/>
          <Result/>
      </DataProvider>
  )
}
export default App
