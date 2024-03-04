const fetchSelectedCourseReviews = async ({ commit }, payload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        // const response = await fetch('http://localhost:3000/courses')
        // const data = await response.json()
        commit('setSelectedCourseReviews', [
          {
            id: 1,
            name: 'John Doe',
            rating: 4,
            review:
              'This course is amazing. I learned a lot from it. I would recommend it to anyone who wants to learn about this topic.'
          },
          {
            id: 2,
            name: 'Jane Smith',
            rating: 5,
            review:
              'I learned a lot from it. I would recommend it to anyone who wants to learn about this topic.'
          },
          {
            id: 3,
            name: 'John Doe',
            rating: 4,
            review:
              'This course is amazing. I learned a lot from it. I would recommend it to anyone who wants to learn about this topic.'
          }
        ])
        resolve()
      } catch (error) {
        console.log(error)
      }
    }, 700)
  })
}

export default fetchSelectedCourseReviews
