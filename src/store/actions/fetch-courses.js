const fetchCourses = async ({ commit }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        // const response = await fetch('http://localhost:3000/courses')
        // const data = await response.json()
        commit('setCourses', [
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
          },
          {
            id: 4,
            title: 'Angular Development',
            description: 'Build dynamic web applications with Angular...',
            amountOfReviews: 18,
            rating: 4.6,
            amountOfLearners: 5818
          },
          {
            id: 5,
            title: 'Learning Python',
            description: 'Become proficient in Python and its popular libraries...',
            amountOfReviews: 30,
            rating: 4.8,
            amountOfLearners: 4314
          },
          {
            id: 6,
            title: 'Node.js Course',
            description: 'Develop server-side applications with Node.js...',
            amountOfReviews: 12,
            rating: 4.2,
            amountOfLearners: 3653
          },
          {
            id: 7,
            title: 'HTML & CSS Basics',
            description: 'Learn to create web pages from scratch...',
            amountOfReviews: 17,
            rating: 4.0,
            amountOfLearners: 8753
          },
          {
            id: 8,
            title: 'Advanced CSS and Sass',
            description: 'Elevate your web design skills...',
            amountOfReviews: 22,
            rating: 4.9,
            amountOfLearners: 5836
          },
          {
            id: 9,
            title: 'Introduction to TypeScript',
            description: 'Discover how to use TypeScript in web development...',
            amountOfReviews: 10,
            rating: 4.1,
            amountOfLearners: 6900
          },
          {
            id: 10,
            title: 'Flutter Development',
            description: 'Create cross-platform applications with Flutter...',
            amountOfReviews: 28,
            rating: 4.7,
            amountOfLearners: 4479
          },
          {
            id: 11,
            title: 'SQL Course',
            description: 'Master the skills of working with SQL databases...',
            amountOfReviews: 14,
            rating: 4.4,
            amountOfLearners: 5206
          },
          {
            id: 12,
            title: 'Web Application Security',
            description: 'Learn the best practices for securing web applications...',
            amountOfReviews: 19,
            rating: 4.5,
            amountOfLearners: 875
          }
        ])
        resolve()
      } catch (error) {
        console.log(error)
      }
    }, 700)
  })
}

export default fetchCourses
