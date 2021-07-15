import React, { useEffect, useState } from 'react'

import Header from '../../frontend/header'

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Fake a network request
    setTimeout(() => {
      setLoading(false)
      setData('This is some async content')
    }, 1000)
  }, [])

  return (
    <html>
      <head>
        <title>Testing JSX on the backend</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚛️</text></svg>"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
      </head>

      <body>
        <main>
          <header className="header" data-js-header>
            <Header />
          </header>
          <p>This is some sync content</p>
          <p>{loading ? 'Loading...' : data}</p>
          <script src="/index.js" />
        </main>
      </body>
    </html>
  )
}
