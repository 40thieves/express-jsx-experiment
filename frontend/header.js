import React, { useState } from 'react'

export default function Header() {
  const [show, setShow] = useState(false)

  function handleClick() {
    setShow(!show)
  }

  return (
    <>
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <path d="M45.66 91.43c-8.47 0-17.13-3.58-24.16-10.09-.42-.39-.83-.79-1.23-1.19-.05-.05-.09-.1-.13-.15l-4.72-5.8c-.04-.05-.08-.1-.12-.16-9.47-14.33-10-35.28 10.16-49.76C42.3 12.19 88.39 7.42 90.35 7.23c.59-.06 1.19.15 1.61.57a2 2 0 0 1 .58 1.61c-.18 1.88-4.57 46.25-17.34 64.31-7.38 10.44-16.53 16.51-26.46 17.55-1.03.11-2.05.16-3.08.16zM23.17 77.4c.34.34.69.68 1.04 1.01 7.04 6.51 15.83 9.76 24.1 8.89 8.87-.93 16.82-6.27 23.61-15.88 10.5-14.85 15.24-50.28 16.36-59.92-9.87 1.17-46.65 6.11-60.5 16.05-17.96 12.9-17.57 31.49-9.21 44.23l4.6 5.62z" />
        <path d="M60.16 68.92h-.09L35.2 66.58a1 1 0 0 1-.9-1.09c.05-.55.53-.96 1.09-.9l24.87 2.33a1 1 0 0 1 .9 1.09c-.05.52-.49.91-1 .91zm7.4-17.73h-.06l-16.17-.89a.996.996 0 0 1-.94-1.05.99.99 0 0 1 1.05-.94l16.18.88c.55.03.97.5.94 1.05-.03.53-.47.95-1 .95z" />
        <path d="M9.45 92.78a2.004 2.004 0 0 1-1.41-3.42l61.92-61.92c.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83L10.87 92.2c-.39.39-.91.58-1.42.58z" />
        <path d="M50.76 50.33c-.52 0-.96-.4-1-.92l-1.42-18.59a.997.997 0 1 1 1.99-.15l1.42 18.59a.997.997 0 0 1-.92 1.07c-.02-.01-.05 0-.07 0zM36.96 66.58c-.47 0-.89-.33-.98-.81l-5.41-27.55a.994.994 0 0 1 .79-1.17.994.994 0 0 1 1.17.79l5.41 27.55a.994.994 0 0 1-.79 1.17c-.07.02-.13.02-.19.02z" />
      </svg>

      <nav className="nav">
        <button onClick={handleClick}>Toggle nav</button>

        {show && (
          <>
            <a className="nav-link" href="http://example.com">
              Documentation
            </a>
            <a className="nav-link" href="http://example.com">
              Contact Us
            </a>
            <a className="nav-link" href="http://example.com">
              Features &amp; Benefits
            </a>
            <a className="nav-link" href="http://example.com">
              Templates
            </a>
            <a className="nav-link" href="http://example.com">
              Plans &amp; Pricing
            </a>
          </>
        )}
      </nav>
    </>
  )
}
