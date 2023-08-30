import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../store/actions/UserActions"

const Users = () => {
  const {results: users} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  
  const onClickUsers = async () => {
    dispatch(getUsers())
  }

  return (
    <div>
      <button onClick={onClickUsers}>Get Users</button>
      {users.map((user, index) => {
        return (
          <p key={index}>{user.email}</p>
        )
      })}
    </div>
  )
}

export default Users
