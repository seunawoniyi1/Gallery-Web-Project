import "./header.css"
import { useNavigate, useLocation } from "react-router-dom"

export default function Header({ isPlaying, setIsPlaying }) {
    const navigate = useNavigate()
    const location = useLocation()

    const handleSlideshow = () => {
        if (!isPlaying) {
            // START slideshow
            setIsPlaying(true)

            // if on homepage → go to first artwork
            if (location.pathname === "/") {
                navigate("/artwork/1")
            }
        } else {
            // STOP slideshow
            setIsPlaying(false)
        }
    }
    
    return(
        <header>
            <div className="page-header">
                <h1
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer"}}
                >
                    galleria.
                </h1>

                <p
                  style={{ cursor: "pointer" }}
                  onClick={handleSlideshow}
                >
                    {isPlaying ? "STOP SLIDESHOW" : "START SLIDESHOW"}
                </p>
            </div>
            
            <hr />

      </header>
    )
}