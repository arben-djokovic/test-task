import React from 'react'
import "./Header.scss"

export default function Header({buttons, title}) {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <section className='buttons'>
            {buttons.map((button, i) => {
              if(button.label) {
                return <label htmlFor={button.label}> <button key={i} id={button.id}>{button.text}</button></label>
              }
                return(<button key={i} id={button.id} onClick={button.onClick}>{button.text}</button>)
            })}
        </section>
    </header>
  )
}
