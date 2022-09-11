import React from 'react'
interface GreeterProps  {
    person: string
}
function Greeter(props:GreeterProps):JSX.Element {
  return (
    <h1>Hello - {props.person}</h1>
  )
}
// const Greeter:React.FC = () => {
//     return <h1>hello</h1>
// }

export default Greeter