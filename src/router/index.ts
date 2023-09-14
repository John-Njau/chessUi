import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import Play from '../pages/play/Play.vue'
import LeaderBoard from '../pages/leaderboard/LeaderBoard.vue'
import Watch from '../pages/watch/Watch.vue'
import SignIn from '../components/accountModal/SignIn.vue'
import SignUp from '../components/accountModal/SignUp.vue'
import PuzzlePage from '../pages/puzzles/PuzzlePage.vue'
import Puzzles from '../pages/puzzles/Puzzles.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderBoard
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/puzzles',
      name: 'puzzles',
      component: Puzzles
    },

    {
      path: '/puzzles/:id',
      name: 'puzzle',
      component: PuzzlePage
    }
  ]
})

export default router
