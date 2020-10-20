/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import styled, { css } from 'styled-components'

export function Layout ({ children }) {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css`
      background: palevioletred;
      color: white;
    `}
  `

  return (
    <div>
      <nav className="layout-container">
        <h1>Test task :)</h1>
        <Link href="/posts/new" >
          <a className="layout-first-button">
            <Button>Create message</Button>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Button>Feed</Button>
          </a>
        </Link>

      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
