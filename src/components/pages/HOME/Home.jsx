import Product from "../../Product/Product";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";
import Services from "./services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;