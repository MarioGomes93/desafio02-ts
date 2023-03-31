import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn

    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('login', () => {

    const mockEmail = 'mariodebora2@gmail.com'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas caso o e-mail seja válido', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    
    })

    it('Deve exibir um erro caso o e-mail ou a senha sejam inválidos', async () => {
        const response = await login('email@invalido.com', '999999')
        expect(response).toBeFalsy()
    })
})