import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import HeroBanner from '../components/HeroBanner';
import CompanySection from '../components/CompanySection';
import Testimonials from '../components/Testimonials';

function App() {
	return (
		<div className="App">
			<Header />
			<HeroBanner />
			<CompanySection />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default App;
