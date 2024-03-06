import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <div className="flex gap-x-4 justify-center p-4">
        <Nav titulo="Inicio" url="/"/>
        <Nav titulo="Walace" url="/walace"/>
        <Nav titulo="Sobre" url="/sobre"/>
    </div>
  )
}
