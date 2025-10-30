import React, { useEffect, useState } from 'react'
import { codeToText } from './utils/weatherCodes'
import * as WiIcons from 'react-icons/wi'

const GEOCODE_API = 'https://geocoding-api.open-meteo.com/v1/search?name='
const FORECAST_API = 'https://api.open-meteo.com/v1/forecast'

export default function App(){
  const [query,setQuery] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [location,setLocation] = useState(null)
  const [weather,setWeather] = useState(null)
  const [theme,setTheme] = useState('light')

  useEffect(()=>{
    const saved = localStorage.getItem('theme')
    if(saved) setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved || 'light')
    fetchByCity('Bengaluru')
  },[])

  useEffect(()=>{ document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme) },[theme])

  async function fetchByCity(city){
    if(!city) return
    setLoading(true); setError(null); setWeather(null)
    try{
      const res = await fetch(GEOCODE_API + encodeURIComponent(city))
      const j = await res.json()
      if(!j.results || j.results.length === 0) throw new Error('City not found')
      const top = j.results[0]
      const loc = { name: top.name, country: top.country, lat: top.latitude, lon: top.longitude, timezone: top.timezone }
      setLocation(loc)
      await fetchWeather(loc.lat, loc.lon)
    }catch(e){
      setError(e.message)
    } finally{
      setLoading(false)
    }
  }

  async function fetchWeather(lat, lon){
    setLoading(true); setError(null)
    try{
      const url = `${FORECAST_API}?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
      const res = await fetch(url)
      const j = await res.json()
      if(!j.current_weather) throw new Error('No weather data available')
      setWeather({ ...j.current_weather, timezone: j.timezone })
    }catch(e){
      setError(e.message)
    } finally{
      setLoading(false)
    }
  }

  function Icon({name, color, size=72}){
    const C = WiIcons[name] || WiIcons.WiNa
    return <C size={size} color={color} />
  }

  return (
    <div className='app-wrap'>
      <div className='dashboard'>
        <div>
          <div className='header'>
            <div className='brand'>
              <div className='logo'>W</div>
              <div>
                <div className='title'>WeatherNow</div>
                <div className='tag'>Quick accurate current weather — built for Jamie</div>
              </div>
            </div>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <button
                className='btn btn-ghost'
                onClick={()=>setTheme(t=>t==='light'?'dark':'light')}
                aria-label='Toggle theme'
                style={{background: 'var(--btn-ghost-bg)', color: 'var(--btn-ghost-text)'}}
              >
                {theme === 'light' ? 'Dark' : 'Light'}
              </button>
              <div className='small' style={{color:'var(--text)'}}>{new Date().toLocaleDateString()}</div>
            </div>
          </div>

          <div className='card'>
            <div className='search-box'>
              <input
                className='input'
                placeholder='Search city e.g. Mumbai, London'
                value={query}
                onChange={e=>setQuery(e.target.value)}
                onKeyDown={e=>{ if(e.key === 'Enter') fetchByCity(query) }}
                style={{background:'var(--input-bg)', color:'var(--input-text)'}}
              />
              <button className='btn btn-primary' onClick={()=>fetchByCity(query)}>Search</button>
              <button className='btn btn-ghost' onClick={() => {
                if(navigator.geolocation){
                  setLoading(true)
                  navigator.geolocation.getCurrentPosition(async pos => {
                    const lat = pos.coords.latitude, lon = pos.coords.longitude
                    setLocation({ name: 'Your location', country: '', lat, lon })
                    await fetchWeather(lat, lon)
                  }, err => {
                    setError(err.message); setLoading(false)
                  })
                } else {
                  setError('Geolocation not supported')
                }
              }} style={{background:'var(--btn-ghost-bg)', color:'var(--btn-ghost-text)'}}>
                My location
              </button>
            </div>

            {loading && (
              <div style={{marginTop:12,display:'flex',alignItems:'center',gap:12}}>
                <div className='loader' role='status' aria-label='Loading'></div>
                <div className='small' style={{color:'var(--muted)'}}>Loading current weather...</div>
              </div>
            )}

            {error && (
              <div style={{marginTop:12,background:'#fee2e2',padding:12,borderRadius:8,color:'#b91c1c'}}>
                <strong>Error:</strong> {error}
              </div>
            )}

            {weather && location && (
              <div style={{marginTop:16}} className='main-weather'>
                <div className='weather-top'>
                  <div className='weather-icon'>
                    <Icon name={codeToText(weather.weathercode).icon} color={codeToText(weather.weathercode).color} size={84} />
                  </div>
                  <div>
                    <div className='temp-large value' style={{color:'var(--primary)'}}>{Math.round(weather.temperature)}°C</div>
                    <div className='small value-muted'>{codeToText(weather.weathercode).text}</div>
                    <div className='small value' style={{color:'var(--text)'}}>Feels like: {Math.round(weather.temperature)}°C</div>
                  </div>
                </div>

                <div className='footer value-muted' style={{color:'var(--muted)'}}>
                  Location: <strong style={{color:'var(--text)'}}>{location.name}{location.country ? `, ${location.country}` : ''}</strong>
                  {weather.time ? ` · ${weather.time}` : ''} · <span className='value' style={{color:'var(--text)'}}>{weather.timezone || ''}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='card side-panel'>
          <div className='detail-row'><div className='small'>Wind</div><div style={{fontWeight:700}} className='value'>{weather ? `${weather.windspeed} km/h` : '—'}</div></div>
          <div className='detail-row'><div className='small'>Wind Direction</div><div style={{fontWeight:700}} className='value'>{weather ? `${Math.round(weather.winddirection)}°` : '—'}</div></div>
          <div className='detail-row'><div className='small'>Temperature</div><div style={{fontWeight:700}} className='value'>{weather ? `${Math.round(weather.temperature)}°C` : '—'}</div></div>
          <div className='detail-row'><div className='small'>Timezone</div><div style={{fontWeight:700}} className='value'>{weather ? weather.timezone : '—'}</div></div>

          <div style={{marginTop:12,fontSize:13,color:'var(--muted)'}}>Data source: Open-Meteo · No API key required</div>
        </div>
      </div>
    </div>
  )
}
