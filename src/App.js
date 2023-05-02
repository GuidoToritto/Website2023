import { Header } from './components/Components/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import { Pages } from './components/Pages';
import { Animation } from './components/Components/Animation';
import Footer from './components/Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Animation/>
        <Header/>       
        <Pages/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;