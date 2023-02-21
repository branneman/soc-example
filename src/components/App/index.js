import React from 'react'
import SubscribeToNewsletter from '../SubscribeToNewsletter'
import './index.css'

export default function App() {
  return (
    <React.StrictMode>
      <main className='outer'>
        <header className='header'>
          <h1>Newsletter</h1>
        </header>
        <section className='main'>
          <SubscribeToNewsletter />
        </section>
      </main>
    </React.StrictMode>
  )
}
