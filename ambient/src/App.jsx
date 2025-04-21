import { useEffect, useState } from 'react'
import './App.css'
import AmbientSound from './components/AmbientSound';
import Nature from './sounds/Nature.wav'
import Rain from './sounds/Rain.wav'
import Timer from './components/Timer';
import Thunder from './sounds/thunder.mp3';
import ocean from './sounds/ocean.wav'
import cafe from './sounds/cafe.mp3'
import fireplace from './sounds/fireplace.mp3'

function App() {
  
  const [activeSounds, setActiveSounds] = useState({
    forest: false,
    rain: false,
    thunder: false,
    ocean: false,
    fireplace: false,
    cafe: false
  });

  const [volumes, setVolumes] = useState({
    forest: 50,
    rain: 50,
    thunder: 50,
    ocean: 50,
    fireplace: 50,
    cafe: 50
  });

  const togglesound = (soundName)=>{
    setActiveSounds(prev=>(
      {
        ...prev,
        [soundName]:!prev[soundName]
      }
    ))
  }


  const handleVolumeChange=(soundName, Volume)=>{
    setVolumes(prev=>(
      {
        ...prev,
        [soundName]:Volume
      }
    ))
    console.log(`${soundName} volume changed to: ${Volume}`);
  }


  return (
    <div className="root">

          <div className="timer">
            <h1><Timer/></h1>
            <p>Click on any sound to play, click again to stop. Adjust volume with the slider. Combine <br/> multiple sounds to create your perfect ambient atmosphere.</p>
          
          </div>

          <div className="cards ">

              <div className={`rain raining ${activeSounds.rain ? '' : 'bro'}`} onClick={() => togglesound('rain')}>

                
                <img src="https://img.icons8.com/?size=100&id=RWaaTjQ4JGUu&format=png&color=000000" alt=""
                
                style={{width:'50px'}}
                />
                <h3>Rain</h3>
                <p>Gentle rain sounds</p>

                <input
                type="range"
                min="0"
                max="100"
                value={volumes.rain}

                onChange={(e)=>handleVolumeChange('rain',e.target.value)}
                
                />
               
                <AmbientSound sound={Rain} isPlaying={activeSounds.rain} Vol={volumes.rain / 100}/>
              </div>
              

              <div className={`rain thunder ${activeSounds.thunder ? '':'bro'}`} onClick={() => togglesound('thunder')}>
                <img src="https://img.icons8.com/?size=100&id=PEfxi3mNT0kR&format=png&color=000000" alt=""
                style={{width:'50px'}}
                />
                <h3>Thunder</h3>
                <p>Distant thunder</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volumes.thunder}

                  onChange={(e)=>handleVolumeChange('thunder',e.target.value)}
                
                />
                <AmbientSound sound={Thunder} isPlaying={activeSounds.thunder} Vol={volumes.thunder / 100}/>
              </div>

              
              <div className={`rain forest ${activeSounds.forest ?'':'bro'}`} onClick={() => togglesound('forest')}>
                <img src="https://img.icons8.com/?size=100&id=qgHx6qhNtGRb&format=png&color=000000" alt=""
                style={{width:'50px'}}
                />
                <h3>Forest</h3>
                <p>Forest ambience</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volumes.forest}

                  onChange={(e)=>handleVolumeChange('forest',e.target.value)}
                
                />
                
                <AmbientSound sound={Nature} isPlaying={activeSounds.forest} Vol={volumes.forest/100}/>
              </div>


              <div className={`rain ocean ${activeSounds.ocean ?'':'bro'}`} onClick={() => togglesound('ocean')}>
                <img src="https://img.icons8.com/?size=100&id=44HfKpSBCevn&format=png&color=000000" alt=""
                style={{width:'50px'}}
                />
                <h3>Ocean</h3>
                <p>Crashing waves</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volumes.ocean}

                  onChange={(e)=>handleVolumeChange('ocean',e.target.value)}
                
                />
                
                <AmbientSound sound={ocean} isPlaying={activeSounds.ocean} Vol={volumes.ocean/100}/>
                
              </div>

              <div className={`rain fireplace ${activeSounds.fireplace?'':'bro'}`} onClick={()=>togglesound('fireplace')}>

                <img src="https://img.icons8.com/?size=100&id=siF0JSENyuZ5&format=png&color=000000" alt=""
                style={{width:'50px'}}
                />
                <h3>FirePlace</h3>
                <p>Crackling fire</p>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volumes.fireplace}

                  onChange={(e)=>handleVolumeChange('fireplace',e.target.value)}
                
                />
                
                <AmbientSound sound={fireplace} isPlaying={activeSounds.fireplace} Vol={volumes.fireplace/100}/>
                
              </div>


              <div className={`rain cafe ${activeSounds.cafe ?'':'bro'}`} onClick={()=>togglesound('cafe')}>
                <img src="https://img.icons8.com/?size=100&id=jhyOApVydYUP&format=png&color=000000" alt=""
                style={{width:'50px'}}
                />
                <h3>Cafe</h3>
                <p>Forest ambience</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volumes.cafe}

                  onChange={(e)=>handleVolumeChange('cafe',e.target.value)}
                
                />
                
                <AmbientSound sound={cafe} isPlaying={activeSounds.cafe} Vol={volumes.cafe/100}/>
                
              </div>


          </div>
    </div>
  )
}

export default App
