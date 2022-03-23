import "../styles/home.css"
import color from "../assets/html-colorI.jpg"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="homepage">
            <img className='banner-image' src={color} alt='background' />
            <h1 className="slogan">PAGE D'ACCUEIL DU SITE SPORTSEE</h1>
            <Link to="/user/12" className="user12link">Mock utilisateur 12</Link>
            <Link to="/user/18" className="user18link">Mock utilisateur 18</Link>
        </div>
        
      
    )
}