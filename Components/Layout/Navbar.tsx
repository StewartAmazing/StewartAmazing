import Image from "next/image"
import Link from "next/link"
import Container from "../Ui/Container"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur text-white">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="font-semibold hover:opacity-90">
            <Image
              src="/images/logo.png"
              alt="Stewart Futures Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          <ul className="flex gap-6 text-sm text-gray-300">
            <li>
              <Link href="/#services" className="nav-link text-gray-300 hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="/services" className="nav-link text-gray-300 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link text-gray-300 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link text-gray-300 hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
