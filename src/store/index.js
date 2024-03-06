import { createStore } from 'vuex'
import fetchCourses from '@/store/actions/fetch-courses.js'
import fetchCourseDetails from '@/store/actions/fetch-course-details.js'
import fetchLessonDetails from '@/store/actions/fetch-lesson-details.js'
import fetchRecommendedCourses from '@/store/actions/fetch-recomended-courses.js'
import fetchActiveCourses from '@/store/actions/fetch-active-courses.js'
import fetchSelectedCourseReviews from '@/store/actions/fetch-course-reviews.js'
import fetchSelectedLessonQuestions from "@/store/actions/fetch-selected-lesson-questions.js";
import createQuestion from "@/store/actions/create-question.js";

const store = createStore({
  state() {
    return {
      courses: [],
      selectedCourse: null,
      selectedLesson: null,
      selectedLessonQuestions: [],
      recommendedCourses: [],
      activeCourse: null,
      userId: 'id123',
      selectedCourseReviews: [],
    }
  },
  actions: {
    fetchCourses,
    fetchCourseDetails,
    fetchLessonDetails,
    fetchRecommendedCourses,
    fetchActiveCourses,
    fetchSelectedCourseReviews,
    fetchSelectedLessonQuestions,
    createQuestion,
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
    },
    setRecommendedCourses(state, courses) {
      state.recommendedCourses = courses
    },
    setActiveCourses(state, courses) {
      state.activeCourse = courses
    },
    setSelectedCourseReviews(state, reviews) {
      state.selectedCourseReviews = reviews
    },
    setSelectedLessonQuestions(state, questions) {
      state.selectedLessonQuestions = questions
    },
    addQuestion(state, question) {
      state.selectedLessonQuestions.unshift(question)
    }
  }
})

export default store
