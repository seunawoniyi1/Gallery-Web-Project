import "./footer.css"

export default function Footer({ artwork, onNext, onPrev, isFirst, isLast, currentIndex, total }) {
    return(
        <footer>
            <div className="progress-bar">
                <div 
                    className="progress-fill"
                    style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                />
            </div>

            <hr />
            <div className="footer">
                <div className="footer-container">
                    <h2>{artwork.title}</h2>
                    <p>{artwork.artist}</p>
                </div>
                <div className="icon">
                    <div 
                        className="control-btn"
                        onClick={onPrev}
                        style={{ 
                            cursor: isFirst ? "not-allowed" : "pointer", 
                            opacity : isFirst ? 0.3 : 1
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.6275 12.1121L24.1656 22.3817V1.84259L3.6275 12.1121Z" stroke="black" strokeWidth="2"/>
                        <rect x="-0.371478" y="0.371478" width="0.742956" height="23.0316" transform="matrix(-1 0 0 1 0.742939 0)" fill="#D8D8D8" stroke="black"  strokeWidth="1.742956"/>
                        </svg>
                    </div>
                    
                    <div 
                        className="control-btn"
                        onClick={onNext}
                        style={{ 
                            cursor: isLast ? "not-allowed" : "pointer", 
                            opacity : isLast ? 0.3 : 1 }}
                        >
                        <svg width="15" height="15" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5381 12.1121L1 22.3817V1.84259L21.5381 12.1121Z" stroke="black" strokeWidth="2"/>
                        <rect x="24.0512" y="0.371478" width="0.742956" height="23.0316" fill="#D8D8D8" stroke="black" strokeWidth="1.742956"/>
                        </svg>
                    </div>
                </div>  
            </div>
        </footer>
    )
}