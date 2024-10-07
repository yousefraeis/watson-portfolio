import {
    About,
    Footer,
    Header,
    Testimonial,
    Skills,
    Portfolio,
} from './sections';
import { Navbar } from './components';
import './scss/index.scss'



import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Portfolio />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default App;
