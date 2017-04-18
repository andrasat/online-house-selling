
export const state = {
  houses: [],
  house: {
    title: '',
    price: 0,
    address: '',
    description: '',
    imgUrl: '',
    owner: '',
    lon: 0,
    lat: 0
  },
  error: false,
  success: false
}

export const getters = {
  oneHouse(state) {
    return state.house
  },
  allHouses(state) {
    return state.houses
  }
}

export const mutations = {

  SET_HOUSES(state, houses) {
    state.houses = houses
  },
  PUSH_HOUSE(state, house) {
    state.houses.push(house)
  },
  EDIT_HOUSE(state, house) {
    // state.houses.splice()
  },
  DELETE_HOUSE(state, house) {

  },
  SET_ERROR(state, value) {
    state.error = value
  },
  SET_SUCCESS(state, value) {
    state.success = value
  }
}

export const actions = {

  getHouses({commit}) {
    axios.get('http://localhost:3000/api/house')
      .then((res)=> {
        commit('SET_HOUSES', res.data)
      })
      .catch((err)=> {
        commit('SET_ERROR', true)
        setTimeout(()=> {commit('SET_ERROR', false)}, 3500)
      })
  },
  newHouse({commit}, house) {
    axios.post('http://localhost:3000/api/house', {
      title: house.title,
      price: house.price,
      address: house.address,
      description: house.description,
      imgUrl: house.imgUrl,
      owner: house.owner,
      lon: house.lon,
      lat: house.lat
    })
      .then((res)=> {
        commit('PUSH_HOUSE', res.data)
        commit('SET_SUCCESS', true)
        setTimeout(()=> {commit('SET_SUCCESS', false)}, 3500)
      })
      .catch((err)=> {
        commit('SET_ERROR', true)
        setTimeout(()=> {commit('SET_ERROR', false)}, 3500)
      })
  },
  editHouse({commit}, house) {
    axios.put('http://localhost:3000/api/house/'+house._id, {
      title: house.title,
      price: house.price,
      address: house.address,
      description: house.description,
      imgUrl: house.imgUrl,
      owner: house.owner,
      lon: house.lon,
      lat: house.lat
    })
      .then((res)=> {

        commit('SET_SUCCESS', true)
        setTimeout(()=> {commit('SET_SUCCESS', false)}, 3500)
      })
      .catch((err)=> {
        commit('SET_ERROR', true)
        setTimeout(()=> {commit('SET_ERROR', false)}, 3500)
      })
  }
}