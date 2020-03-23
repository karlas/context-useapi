const BASE_API = 'https://swapi.co/api'

const get = async (path) => {
  try{
    const response = await window.fetch(BASE_API + path)
    return await response.json()
  }
  catch(errorCode){
    console.error('API error fetching data', errorCode)
    throw errorCode
  }
}

export const fetchPeople = id => get(`/people/${ id }/`)