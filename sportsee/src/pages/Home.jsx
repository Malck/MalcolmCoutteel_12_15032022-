import "../styles/home.css"
import color from "../assets/html-colorI.jpg"

export default function HomePage() {
    return (
        <div className="homepage">
            <img className='banner-image' src={color} alt='background' />
            <h1 className="slogan">PAGE D'ACCUEIL DU SITE SPORTSEE</h1>
        </div>
        
      
    )
}