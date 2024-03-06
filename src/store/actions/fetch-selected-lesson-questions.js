const fetchSelectedLessonQuestions = async ({ commit }, payload) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            try {
                // const response = await fetch('http://localhost:3000/courses')
                // const data = await response.json()
                commit('setSelectedLessonQuestions', [
                    {
                        id: 1,
                        content: 'This is a question',
                        author: 'John Doe',
                        avatar: 'https://randomuser.me/api/portraits',
                        replies: [
                            {
                                id: 1,
                                content: 'This is a reply to the question',
                                author: 'Admin User',
                                avatar: 'https://randomuser.me/api/portraits',
                            }
                        ]
                    },
                    {
                        id: 2,
                        content: 'This is another question',
                        author: 'Amy Smith',
                        avatar: 'https://randomuser.me/api/portraits',
                        replies: []
                    }
                ])
                resolve()
            } catch (error) {
                console.log(error)
            }
        }, 700)
    })
}

export default fetchSelectedLessonQuestions
