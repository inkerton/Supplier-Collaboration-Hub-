import ProductList from "../ProductList/ProductList";
import NavBar from "../navbar/NavBar";

function Home() {
    return (

        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}

export default Home;