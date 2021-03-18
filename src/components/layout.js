import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link to="/">
        <img src="https://smsfp.gumlet.net/logo.svg" alt="Logo SMS finance, a.s." />
        </Link>
        <nav>
        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/o-nas/">O nás</ListLink>
          <ListLink to="/kariera/">Kariéra</ListLink>
          <ListLink to="/novinky/">Novinky</ListLink>
          <ListLink to="/kontakt/">Kontakt</ListLink>
          <ListLink to="/povinne-informace/">Povinné informace</ListLink>
        </ul>
        </nav>
        <nav>
        <ul>
          <ListLink to="/pojisteni/">Pojištění</ListLink>
          <ListLink to="/hypoteky-uvery/">Hypotéky a úvěry</ListLink>
          <ListLink to="/investice/">Investice</ListLink>
          <ListLink to="/sporeni/">Spoření</ListLink>
        </ul>
        </nav>
      </header>
      {children}
    </div>
    
  )
}