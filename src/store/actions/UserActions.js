import Axios from "axios"

export const PENDING_USERS = 'PENDING_USERS'
export const FULFILLED_USERS = 'FULFILLED_USERS'
export const ERROR_USERS = 'ERROR_USERS'

export const gettingUsers = () => {
  return {
    type: PENDING_USERS,
    payload: null
  }
}

export const fulfilledGettingUsers = (results) => {
  console.log('action : ', results)
  return {
    type: FULFILLED_USERS,
    payload: { results }
  }
}

export const errorGettingUsers = () => {
  return {
    type: ERROR_USERS,
    payload: null
  }
}

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(gettingUsers())
      const resp = await Axios.get('https://randomuser.me/api/?results=20')
      console.log('results: ', resp.data.results)
      dispatch(fulfilledGettingUsers(resp.data.results))
    } catch(err) {
      console.error(err)
      dispatch(errorGettingUsers())
    }
  }
}