import axios from 'axios'

export default function useAuth() {
    const login = async (credentials) => {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/login', credentials)
    }

    return {
        login
    }
}
