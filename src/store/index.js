import { createStore } from 'vuex'
import fetchCourses from '@/store/actions/fetch-courses.js'
import fetchCourseDetails from '@/store/actions/fetch-course-details.js'
import fetchLessonDetails from '@/store/actions/fetch-lesson-details.js'

const store = createStore({
  state() {
    return {
      courses: [],
      selectedCourse: null,
      selectedLesson: null
    }
  },
  actions: {
    fetchCourses,
    fetchCourseDetails,
    fetchLessonDetails
  },
  mutations: {
    setCourses(state, courses) {
      state.courses = courses
    },
    setSelectedCourse(state, course) {
      state.selectedCourse = course
    },
    setSelectedLesson(state, lesson) {
      state.selectedLesson = lesson
    }
  }
})

export default store
