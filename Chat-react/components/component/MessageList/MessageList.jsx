export default function MessageList({ messages }) {
  return (
    <>
      <h3>list</h3>
      <ul>
        {messages.map((el, index) => (
          <li key={index}>{el.text}</li>
        ))}
      </ul>
    </>
  )
}