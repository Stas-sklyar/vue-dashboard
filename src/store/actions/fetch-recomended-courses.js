const fetchRecommendedCourses = async ({ commit }, payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        // const response = await fetch('http://localhost:3000/courses')
        // const data = await response.json()
        commit('setRecommendedCourses', [
          {
            id: 1,
            title: 'Vue.js Course',
            description: 'A comprehensive guide to Vue.js for beginners...',
            amountOfReviews: 15,
            rating: 4.5,
            amountOfLearners: 2425
          },
          {
            id: 2,
            title: 'React Course',
            description: 'Learn React library and create interactive UIs...',
            amountOfReviews: 20,
            rating: 4.7,
            amountOfLearners: 8417
          },
          {
            id: 3,
            title: 'JavaScript Basics',
            description: 'Lay a solid foundation of JavaScript understanding...',
            amountOfReviews: 25,
            rating: 4.3,
            amountOfLearners: 1041
          }
        ])
        resolve()
      } catch (error) {
        console.log(error)
      }
    }, 700)
  })
}

export default fetchRecommendedCourses
