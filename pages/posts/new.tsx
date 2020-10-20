/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Message } from '../../components/Message'
import { createPost } from '../../network/axios'
import styled, { css } from 'styled-components'

export default function createMessage () {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

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

  const handleChange = (event: any) => {
    event.preventDefault()
    const inputValue = event.target.value
    event.target.name === 'body' ? setBody(inputValue) : setTitle(inputValue)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    createPost({ title, body })

    setTitle('')
    setBody('')
  }

  return (
    <Layout>
      <div className="new-message">
        <h1>Create message</h1>

        <form>
          <b>Title</b>
          <input
            className={'styled-input'}
            onChange={handleChange}
            name={'title'}
            value={title}
          />

          <b>Body</b>
          <input
            className={'styled-input'}
            onChange={handleChange}
            name={'body'}
            value={body}
          />

          <Button onClick={handleSubmit}>Create</Button>
        </form>

        <div className="line"></div>
        <div className="messageExample">
          <h1>For exampe:</h1>
          <Message
            title={title === '' ? 'Title' : title}
            id='0'
            body={body === '' ? 'Body' : body}
          />
        </div>
      </div>
    </Layout>
  )
}
