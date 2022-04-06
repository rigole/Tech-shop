import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
            <main className="py-3">
                <Container>
                    <HomePage/>
                 </Container>
            </main>
        <Footer/>
    </div>
  );
}

export default App;
