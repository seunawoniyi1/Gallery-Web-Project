import './gallery.css'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function ArtworkCard({ artwork}) {
    const navigate = useNavigate()

    const {img, title, artist, id } = artwork
    return (
        <div 
            className="img-box"
            onClick={() => navigate(`/artwork/${id}`)}
            style={{ cursor: "pointer" }}
        >
            <img 
                style={{ height: img.height }} 
                src={img.src}
                alt={img.alt} 
            />

            <div className="overlay">
                <h3>{title}</h3>
                <p>{artist}</p>
            </div>
        </div>
    )
}
                    
export default function Main({ artworks }) {
    const col1 = artworks.slice(0, 4)
    const col2 = artworks.slice(4, 8)
    const col3 = artworks.slice(8, 11)
    const col4 = artworks.slice(11, 15)

    return (
        // <main className="main-container">
        //     <section className="row-section">
        //         {artworks.map((artwork, index) => (
        //             <ArtworkCard key={index} artwork={artwork} />
        //         ))}
        //     </section>
        // </main>  
        <>
            {/* <Header /> */}
            {/* coz of the dynamics of the 4 equal columns */}
            <main className="main-container">
                <section className="row-section">
                    {col1.map((art) => (
                        <ArtworkCard key={art.id} artwork={art} />
                    ))}
                </section>

                <section className="row-section">
                    {col2.map((art) => (
                        <ArtworkCard key={art.id} artwork={art} />
                    ))}
                </section>

                <section className="row-section">
                    {col3.map((art) => (
                        <ArtworkCard key={art.id} artwork={art} />
                    ))}
                </section>

                <section className="row-section">
                    {col4.map((art) => (
                        <ArtworkCard key={art.id} artwork={art} />
                    ))}
                </section>
            </main>
        </>   

        
    )
}

 //hand coded....
        // <main className="main-container">
        //     <section className="row-section">
        //         <div className="img-box">
        //         <img style={{ height: "250px" }} src="src\images\Starry_night.png" alt="Starry Night" />

        //         <div className="overlay">
        //             <h3>Starry Night</h3>
        //             <p>Vincent Van Gogh</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "340px" }} src="src\images\storm.png" alt="The Storm on the Seam of Galilee" />

        //         <div className="overlay">
        //             <h3>The Storm on the Sea of Galilee</h3>
        //             <p>Rembrandt</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "420px" }} src="src\images\Ermine.png" alt=" Lady with an Ermin" />
                
        //         <div className="overlay">
        //             <h3>Lady with an Ermin</h3>
        //             <p>Leonardo da Vinci</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "260px" }} src="src\images\red_vest.png" alt=" The Boy in the Red Vest" />

        //         <div className="overlay">
        //             <h3>The Boy in the Red Vest</h3>
        //             <p>Edward Hopper</p>
        //         </div>
        //         </div>
        //     </section>
        //     {/* 2nd row section */}
        //     <section className="row-section">
        //         <div className="img-box">
        //         <img style={{ height: "400px" }} src="src\images\Girl.png" alt="Girl with a Pearl Earring" />
                
        //         <div className="overlay">
        //             <h3>Girl with a Pearl Earring</h3>
        //             <p>Johannes Vermeer</p>
        //         </div>
        //         </div>
        //         <div className="img-box">
        //         <img style={{ height: "280px" }} src="src\images\wave_off.png" alt="The Great Wave off Kanagawa" />
                
        //         <div className="overlay">
        //             <h3>The Great Wave off Kanagawa</h3>
        //             <p>Hokusai</p>
        //         </div>
        //         </div>
        //         <div className="img-box">
        //         <img style={{ height: "260px" }} src="src\images\night_cafe.png" alt="The Night Cafe" />

        //         <div className="overlay">
        //             <h3>The Night Cafe</h3>
        //             <p>Vincent van Gogh</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "330px" }} src="src\images\arnolfini.png" alt="Arnolfini Portrait" />
                
        //         <div className="overlay">
        //             <h3>Arnolfini Portrait</h3>
        //             <p>Jan van Eyck</p>
        //         </div>
        //         </div>
        //     </section>
        //     {/* 3rd row-section */}
        //     <section className="row-section">
        //         <div className="img-box">
        //         <img style={{ height: "285px" }} src="src\images\Guernica.png" alt="Guernica" />

        //         <div className="overlay">
        //             <h3>Guernica</h3>
        //             <p>Pablo Picasso</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "500px" }} src="src\images\Van_Gogh.png" alt="Van Goph self-portrait" />
                
        //         <div className="overlay">
        //             <h3>Van Gogh self-portrait</h3>
        //             <p>Vincent Van Gogh</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "525px" }} src="src\images\mona_lisa.png" alt="Mona Lisa" />

        //         <div className="overlay">
        //             <h3>Mona Lisa</h3>
        //             <p>Leonard da Vinci</p>
        //         </div>
        //         </div>
        //     </section>
        //     {/* fourth row section */}
        //     <section className="row-section">
        //         <div className="img-box">
        //         <img style={{ height: "250px" }} src="src\images\penitent.png" alt="Penitent Magdalene" />
                
        //         <div className="overlay">
        //             <h3>Penitent Magdalene</h3>
        //             <p>Artemisia Gentileschi</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "250px" }} src="src\images\Gypsy.png" alt="The Sleeping Gypsy" />

        //         <div className="overlay">
        //             <h3>The Sleeping Gypsy</h3>
        //             <p>Henri Rousseau</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "430px" }} src="src\images\apples.png" alt="The Basket of Apples" />

        //         <div className="overlay">
        //             <h3>The Basket of Apples</h3>
        //             <p>Paul Cezanne</p>
        //         </div>
        //         </div>

        //         <div className="img-box">
        //         <img style={{ height: "340px" }} src="src\images\the_swing.png" alt="The Swing" />

        //         <div className="overlay">
        //             <h3>The Swing</h3>
        //             <p>Jean-Honore Fragonard</p>
        //         </div>
        //         </div>
        //     </section>
        // </main>