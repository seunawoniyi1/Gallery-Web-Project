import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./details.css"
import Footer from "./Footer";
import { useState, useEffect } from "react";

function ArtworkDetails({ artworks, isPlaying, setIsPlaying }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false)

    const currentIndex = artworks.findIndex(
        a => a.id === Number(id)
    )
    // console.log(currentIndex)
    const artwork = artworks[currentIndex]

    // const nextArtwork = artworks[(currentIndex + 1) % artworks.length]
    // const prevArtwork = artworks[(currentIndex -1 + artworks.length) % artworks.length]

    const isFirst = currentIndex === 0
    const isLast = currentIndex === artworks.length - 1

    // const nextArtwork = !isLast ? artworks[currentIndex + 1] : null
    const nextArtwork = artworks[(currentIndex + 1) % artworks.length]
    const prevArtwork =  !isFirst ? artworks[currentIndex - 1] : null

    useEffect(() => {
        if (!isPlaying) return
        if (!nextArtwork) return

        const interval = setInterval(() => {
            // if (nextArtwork) {
            navigate(`/artwork/${nextArtwork.id}`)
            // }
        }, 3000)

        return () => clearInterval(interval)
    }, [isPlaying, nextArtwork, navigate])

    useEffect(() => {
        const handleKeyDown = (e) => {

            if (e.key === " ") {
                e.preventDefault()
            }

            if (e.key === "ArrowRight") {
                navigate(`/artwork/${nextArtwork.id}`)
            }

            if (e.key === "ArrowLeft" && prevArtwork) {
                navigate(`/artwork/${prevArtwork.id}`)
            }

            if (e.key === "Escape") {
                setIsModalOpen(false)
            }

            if (e.key === " ") {
                setIsPlaying(prev => !prev)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [nextArtwork, prevArtwork, navigate, setIsPlaying])

    if (!artwork) return <h2>Artwork not found</h2>
    return (
        <>
          {/* <Header /> */}
          <main className="container">
            <aside className="art-display-section">
                <div className="main-image-wrapper">
                    <img className="main-image" src={artwork.img.src} alt={artwork.alt} />
                
                    <button className="view-full-img" onClick={() => setIsModalOpen(true)}>
                        {/* <svg width="12" height="12" viewBox="0 0 12 12"><path d="M...Z" fill="#FFF"/></svg> */}
                        VIEW IMAGE
                    </button>

                    <div className="art-title-overlay">
                        <h1>{artwork.title}</h1>
                        <p className="artist-name">{artwork.artist}</p>
                    </div>
                </div>
                
                <div className="artist-portrait">
                    <img src={artwork.artist_img.src} alt={artwork.artist_alt} />
                </div>
            </aside>


            <section className="art-content-section">
                 <div className="year-background">
                    {artwork.year}
                </div>
                <div className="content-inner">
                    <p className="description-text">{artwork.details}</p>  
                    <a href="#" className="source-link">GO TO SOURCE</a>
                </div>
            </section>
          </main>

        {isModalOpen && (
            <div className="image-modal-overlay">
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                        CLOSE
                    </button>
                    <img src={artwork.img.src} alt={artwork.alt} className="modal-image" />
                </div>
            </div>
        )}

          <Footer 
            artwork={artwork}
            onNext={() => !isLast && navigate(`/artwork/${nextArtwork.id}`)}
            onPrev={() => !isFirst && navigate(`/artwork/${prevArtwork.id}`)}
            isFirst={isFirst}
            isLast={isLast}
            currentIndex={currentIndex}
            total={artworks.length}
          />
        </>
    )
};

export default ArtworkDetails;

