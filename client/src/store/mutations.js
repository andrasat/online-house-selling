
export const state = {
  houses: [],
  house: {
    title: '',
    price: 0,
    address: '',
    description: '',
    imgUrl: '',
    owner: '',
    coordinate: {
      lon: 0,
      lat: 0
    }
  },
  error: false,
  success: false,
  modalClass: {
    'modal': true,
    'is-active': false
  },
  center: {
    lat: -6.260310,
    lng: 106.779885
  },
  position: {
    lat: -6.260310,
    lng: 106.779885
  }
}

export const getters = {
  oneHouse(state) {
    return state.house
  },
  allHouses(state) {
    return state.houses
  },
  getModalClass(state) {
    return state.modalClass
  },
  getCenter(state) {
    return state.center
  },
  getPosition(state) {
    return state.position
  }
}

export const mutations = {

  SET_HOUSES(state, houses) {
    state.houses = houses
  },
  PUSH_HOUSE(state, house) {
    state.houses.push(house)
  },
  GET_ONE_HOUSE(state, house) {
    state.house = house
  },
  EDIT_HOUSE(state, house) {
    state.houses.splice(state.houses.indexOf(house), 1, house)
  },
  DELETE_HOUSE(state, house) {
    state.houses.splice(state.houses.indexOf(house), 1)
  },
  SET_ERROR(state, value) {
    state.error = value
  },
  SET_SUCCESS(state, value) {
    state.success = value
  },
  SET_MODALACTIVE(state, value) {
    state.modalClass['is-active'] = value
  },
  SET_POSITIONCHANGE(state, event) {
    state.house.coordinate = {
      lat: event.lat(),
      lon: event.lng()
    }
  },
  SET_CENTER_AND_POSITION(state, value) {
    state.center = {
      lat: value.lat,
      lng: value.lon
    }
    state.position = {
      lat: value.lat,
      lng: value.lon
    }
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
  newHouse({commit, state}, house) {
    axios.post('http://localhost:3000/api/house', {
      title: house.title,
      price: house.price,
      address: house.address,
      description: house.description,
      imgUrl: house.imgUrl,
      owner: house.owner,
      lon: house.coordinate.lon ? house.coordinate.lon : state.center.lng,
      lat: house.coordinate.lat ? house.coordinate.lat : state.center.lat
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
  editHouse({commit, state}, house) {
    axios.put('http://localhost:3000/api/house/'+house._id, {
      title: house.title,
      price: house.price,
      address: house.address,
      description: house.description,
      imgUrl: house.imgUrl,
      owner: house.owner,
      lon: house.coordinate.lon ? house.coordinate.lon : state.center.lng,
      lat: house.coordinate.lat ? house.coordinate.lat : state.center.lat
    })
      .then((res)=> {
        commit('EDIT_HOUSE', house)
        commit('SET_MODALACTIVE', false)
        commit('SET_SUCCESS', true)
        setTimeout(()=> {commit('SET_SUCCESS', false)}, 3500)
      })
      .catch((err)=> {
        console.log(err)
        commit('SET_ERROR', true)
        setTimeout(()=> {commit('SET_ERROR', false)}, 3500)
      })
  },
  deleteHouse({commit}, house) {
    let confirmed = confirm('are you sure?')

    if(confirmed) {
      axios.delete('http://localhost:3000/api/house/'+house._id)
        .then((res)=> {
          console.log('RESPONSE: ',res)
          console.log('success')
          commit('DELETE_HOUSE', house)
          commit('SET_SUCCESS', true)
          setTimeout(()=> {commit('SET_SUCCESS', false)}, 3500)
        })
        .catch((err)=> {
          console.log('ERROR: ',err)
          console.log('failed?')
          commit('SET_ERROR', true)
          setTimeout(()=> {commit('SET_ERROR', false)}, 3500)
        })
    } else {
      console.log('canceled')
    }
  },
  changeModalStatus({commit}, value) {
    commit('SET_MODALACTIVE', value)
  },
  getOneHouse({commit}, house) {
    commit('GET_ONE_HOUSE', house)
  },
  changePosition({commit}, ev) {
    commit('SET_POSITIONCHANGE', ev)
  },
  setCenterAndPosition({commit}, value) {
    commit('SET_CENTER_AND_POSITION', value)
  }
}