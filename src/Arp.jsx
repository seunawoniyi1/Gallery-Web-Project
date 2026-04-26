import "./App.css"

import starryNight from "./images/Starry_night.png"
import storm from "./images/storm.png"
import ermine from "./images/Ermine.png"
import redVest from "./images/red_vest.png"
import girl from "./images/Girl.png"
import wave from "./images/wave_off.png"
import nightCafe from "./images/night_cafe.png"
import arnolfini from "./images/arnolfini.png"
import guernica from "./images/Guernica.png"
import vanGogh from "./images/Van_Gogh.png"
import monaLisa from "./images/mona_lisa.png"
import penitent from "./images/penitent.png"
import gypsy from "./images/Gypsy.png"
import apples from "./images/apples.png"
import swing from "./images/the_swing.png"

export default function App() {
  return (
    <main className="main-container">
      <div className="masonry">

        <img className="h-250" src={starryNight} />
        <img className="h-340" src={storm} />
        <img className="h-420" src={ermine} />
        <img className="h-260" src={redVest} />

        <img className="h-400" src={girl} />
        <img className="h-280" src={wave} />
        <img className="h-260" src={nightCafe} />
        <img className="h-330" src={arnolfini} />

        <img className="h-285" src={guernica} />
        <img className="h-500" src={vanGogh} />
        <img className="h-525" src={monaLisa} />

        <img className="h-250" src={penitent} />
        <img className="h-250" src={gypsy} />
        <img className="h-430" src={apples} />
        <img className="h-340" src={swing} />

      </div>
    </main>
  )
}