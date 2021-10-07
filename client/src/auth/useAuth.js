import axios from 'axios'
import { reactive, computed } from 'vue'

const state = reactive({
    authenticated: false,
    user: {}
})

export default function useAuth() {
    const getAuthenticated = computed(() => state.authenticated)

    const getUser = computed(() => state.user)

    const setAuthenticated = (authenticated) => {
        state.authenticated = authenticated
    }

    const setUser = (user) => {
        state.user = user
    }

    const attempt = async () => {
        try {
            let response = await axios.get('/api/user')

            setAuthenticated(true)
            setUser(response.data)

            return response
        } catch (e) {
            setAuthenticated(false)
            setUser({})
        }
    }

    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', credentials)
        attempt()
    }

    return {
        login,
        getAuthenticated,
        getUser
    }
}
