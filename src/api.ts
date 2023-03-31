const conta = { 
    email: 'mariodebora2@gmail.com',
    password: '123456',
    name: 'Mario Gomes',
    balance: 20000.00,
    id: '1'    
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 4000)
})