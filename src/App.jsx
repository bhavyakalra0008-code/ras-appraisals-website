import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ServiceArea from './components/ServiceArea'
import About from './components/About'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return <><Header /><main><Hero /><section className="trust section-pad"><div className="eyebrow">INDEPENDENT. CREDIBLE. RESPONSIVE.</div><div className="trust-grid"><h2>Clear opinions of value, built on the details that matter.</h2><p>RAS Appraisals provides well-supported residential market value opinions for the decisions that need them most. We pair careful property analysis with local market evidence, direct communication, and a time-sensitive approach to every assignment.</p></div></section><Services /><ServiceArea /><About /><Process /><WhyUs /><Contact /></main><Footer /></>
}
export default App
