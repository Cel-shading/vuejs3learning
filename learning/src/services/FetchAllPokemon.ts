import axios from "axios";

import {reactive} from "vue";

const state = reactive({
  pokemon: [],
  loading: false,
  error: null
})

const FetchAllPokemon = async () => {
  state.loading = true
  try {
    const response = await axios.get('https://tyradex.vercel.app/api/v1/pokemon')
    state.pokemon = response.data
  } catch (error) {
    state.error = error
  } finally {
    state.loading = false
  }
}

export default FetchAllPokemon