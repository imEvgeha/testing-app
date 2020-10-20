/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { setMessage } from '../../redux/actions/main'
import { connect } from 'react-redux'
import { Layout } from '../../components/Layout'
import { TMessageData } from '..'
import { getDefinitePost, deleteDefinitePost, createComment } from '../../network/axios'
import styled from 'styled-components'

export type TMessageProps = {
  getMessage: TMessageData[],
  setMessage: (data) => void
}

function Posts (props: TMessageProps) {
  const [body, setBody] = useState<string>('')
  const { getMessage, setMessage } = props
  const id = useRouter().query.id
  const router = useRouter()

  const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid grey;
      color: grey;
      margin: 0.5em 1em;
      padding: 0.25em 1em;
    `

  useEffect(() => {
    getDefinitePost(id)
      .then(function (response: any) {
        setMessage(response)
      })
  }, [])

  const handleDeleteClick = () => {
    deleteDefinitePost(id)
      .then(function () {
        router.push({
          pathname: '/'
        })
      })
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    setBody(event.target.value)
  }

  const handleCommentSubmit = (event) => {
    event.preventDefault()
    createComment({ id, body })
    setBody('')
  }

  return (
    <Layout>
      <div className="postInfo">
        <h1>{`Message №${getMessage.id}`}</h1>
        <h2>{getMessage.title}</h2>
        <h2>{getMessage.body}</h2>
        <Button onClick={handleDeleteClick} className="delete-button">Delete this message</Button>
        <div>
          <form>
            <b>Comment body:</b>
            <input
              className={'styled-comment-input'}
              onChange={handleChange}
              name={'body'}
              value={body}
            />

            <Button onClick={handleCommentSubmit}>Create</Button>
          </form>
        </div>
        <div>
          {getMessage.comments && getMessage.comments.map((elem) => {
            return (
              <div key={elem.id} className={'post-comment'}>
                <span>{`User №${elem.id}`}</span>
                <br></br>
                <span>{elem.body}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  getMessage: state.main.openedMessage
})

const mapDispathToProps = {
  setMessage: setMessage
}

export default connect(mapStateToProps, mapDispathToProps)(Posts)
