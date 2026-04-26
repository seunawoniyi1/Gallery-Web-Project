import Header from "../components/Header"
import Main from "../components/galleryArtWorks"
import dataValues from "./data"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ArtworkDetails from "../pages/ArtworkDetails"
import { useState } from "react"

function App() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <BrowserRouter>
      <Header isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

      <Routes>
        <Route path="/" 
            element={
              <Main artworks={dataValues} />
          } 
        />

        <Route 
          path="/artwork/:id" 
          element={            
            <ArtworkDetails 
              artworks={dataValues} 
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
