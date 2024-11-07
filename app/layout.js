import "./globals.css"
import UserProvider from './context/user'
import CartProvider from './context/cart'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: "Andor",
  description: "B2B Web Application",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />

        <UserProvider>
          <CartProvider>
          {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  )
}
