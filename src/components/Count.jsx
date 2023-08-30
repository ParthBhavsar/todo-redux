import { useSelector } from 'react-redux'

const Count = () => {
  const {count} = useSelector((state) => {return state.counter})
  return (
    <h1>New Count: {count}</h1>
  )
}

export default Count