import '@styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oila by codepraycode',
  description: 'Who know who know you?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <!-- A modal dialog containing a form --> */}
        {/* <dialog open id="favDialog">
          <form>
            <p>
              <label>
                Favorite animal:
                <select>
                  <option value="default">Choose…</option>
                  <option>Brine shrimp</option>
                  <option>Red panda</option>
                  <option>Spider monkey</option>
                </select>
              </label>
            </p>
            <div>
              <button value="cancel" formMethod="dialog">Cancel</button>
              <button id="confirmBtn" value="default">Confirm</button>
            </div>
          </form>
        </dialog> */}

        {children}
      </body>
    </html>
  )
}
