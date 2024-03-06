const createQuestion = async ({ commit }, payload) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            try {
                // const response = await fetch('http://localhost:3000/courses')
                // const data = await response.json()
                commit('addQuestion', payload.question)
                resolve()
            } catch (error) {
                console.log(error)
            }
        }, 700)
    })
}

export default createQuestion
