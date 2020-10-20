/* eslint-disable react/react-in-jsx-scope */
import { TMessageData } from "../pages";

export function Message(props: TMessageData) {
  return (
    <div className="message-backgroung">
      <span className="message-title">{props.title}</span>
      <div className="message-body">
        <p>{props.body}</p>
      </div>
      <span>{props.id}</span>
    </div>
  )
}