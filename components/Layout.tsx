/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Head from 'next/head'
import styled, { css } from 'styled-components'

export function Layout ({ children }) {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor: pointer;

    ${props => props.primary && css`
      background: palevioletred;
      color: white;
    `}
  `

  return (
    <div>
      <Head>Testing app :)</Head>
      <nav className="layout-container">
        <h1>Test task :)</h1>
        <div className="layout-first-button">
          <Link href="/posts/new" >
            <Button>Create message</Button>
          </Link>
          <Link href="/">
            <Button>Feed</Button>
          </Link>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
