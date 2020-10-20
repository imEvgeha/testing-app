/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { Message } from '../components/Message'
import { connect } from 'react-redux'
import { setData } from '../redux/actions/main'
import { getPosts } from '../network/axios'
import Link from 'next/link'

export type TMessageData = {
  body: string,
  comments?: TComment[],
  id: number,
  title: string
}

export type TComment = {
  body: string,
  id: number,
  postId: number
}

export type TProps = {
  getData: TMessageData[],
  setData: (data) => void
}

function Home (props: TProps) {
  const { getData, setData } = props

  useEffect(() => {
    getPosts()
      .then(function (response: any) {
        setData(response)
      })
      .catch(function (error: any) {
        console.log(error)
      })
  }, [])

  return (
    <Layout>
      <div className="message-rete">
        { getData.reverse().map((elem: TMessageData) => {
          return (
            <Link key={elem.id} href={'/posts/[id]'} as={`/posts/${elem.id}`}>
              <a>
                <Message
                  title={elem.title}
                  body={elem.body}
                  id={elem.id}
                />
              </a>
            </Link>
          )
        }) }
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  getData: state.main.data
})

const mapDispathToProps = {
  setData: setData
}

export default connect(mapStateToProps, mapDispathToProps)(Home)
