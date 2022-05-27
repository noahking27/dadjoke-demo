import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home = () => {
    return (
    <>
        <Header/>
         <h1>Welcome to the Dad Joke Application</h1>
         <Link to="/dad">Get a dad joke</Link>
        <Footer />
    </>
    )  
}

export default Home