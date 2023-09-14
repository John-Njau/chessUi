<template>
  <div class="flex flex-col justify-between space-y-8 lg:flex-row">
    <!-- Side Menu -->
    <div class="lg:w-[10%] px-4 lg:px-0 shadow-2xl shadow-[#444]">
      <div class="flex flex-wrap w-full h-full lg:flex-col justify-evenly">
        <div
          v-for="(menu, index) in gameSideMenu"
          :key="index"
          class="flex flex-col items-center gap-2 mx-2 my-2 hover:scale-[1.1] cursor-pointer"
        >
          <!-- <p class="text-[1.5rem]">{{ menu.icon }}</p> -->
          <p>{{ menu.menu }}</p>
        </div>
      </div>
    </div>

    <!-- Player Information and Chessboard -->
    <div class="flex flex-col items-center justify-between py-5 shadow-[#333] shadow-2xl lg:w-1/2">
      <div
        class="flex lg:items-start justify-between px-4 py-2 mb-4 text-white rounded-lg lg:space-x-[3rem] lg:w-full w-full sm:w-3/4 gap-6 items-center"
      >
        <div class="flex flex-col items-center lg:flex-row">
          <div class="flex items-center justify-center w-6 h-6 rounded-full lg:w-12 lg:h-12">
            <img src="https://picsum.photos/50/50" class="w-full rounded-full" alt="" />
          </div>
          <span class="ml-3 text-lg font-semibold">Opponent</span>
        </div>
        <div class="flex flex-col items-center lg:items-start">
          <span class="text-sm">Score:</span>
          <span class="text-xl font-bold">{{ playerScores[0] }}</span>
        </div>
        <div class="flex flex-col items-center lg:items-start">
          <span class="text-sm">Time Remaining:</span>
          <span class="text-xl font-bold">{{ countdownTime }} sec</span>
        </div>
      </div>
      <table class="border-gray-300 rounded-md">
        <tbody>
          <tr v-for="row in 8" :key="row">
            <td
              v-for="col in 8"
              :key="col"
              class="w-16 h-16"
              :class="[(row + col) % 2 === 0 ? 'bg-[#E9EDCC]' : 'bg-[#779954]']"
              @click="handlePieceClick(row - 1, col - 1)"
            >
              <span
                class="flex items-center justify-center text-3xl hover:scale-[1.1] text-[black]"
              >
                {{ chessIcons[(row - 1) * 8 + col - 1] }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="flex lg:items-start justify-between px-4 py-2 mb-4 text-white rounded-lg lg:space-x-[3rem] lg:w-full w-full sm:w-3/4 gap-6 items-center mt-5"
      >
        <div class="flex flex-col items-center lg:flex-row">
          <div class="flex items-center justify-center w-6 h-6 rounded-full lg:w-12 lg:h-12">
            <img src="https://picsum.photos/50/51" class="w-full rounded-full" alt="" />
          </div>
          <span class="ml-3 text-lg font-semibold">You</span>
        </div>
        <div class="flex flex-col items-start">
          <span class="text-sm">Score:</span>
          <span class="text-xl font-bold">{{ playerScores[1] }}</span>
        </div>
        <div class="flex flex-col items-start">
          <span class="text-sm">Time Remaining:</span>
          <span class="text-xl font-bold">{{ countdownTime }} sec</span>
        </div>
      </div>
    </div>

    <!-- Game Selection and Options -->
    <div class="flex flex-col w-3/4 mx-auto shadow-xl lg:mx-5 lg:w-1/3 shadow-[#333]">
      <div class="flex bg-[#111] justify-around rounded-md shadow-md my-3">
        <div
          v-for="(menu, index) in menu"
          :key="index"
          class="flex flex-col items-center justify-between text-white p-2 hover:bg-[#252525] cursor-pointer"
          @click="setActiveLink(index === 0 ? 'newGame' : index === 1 ? 'games' : 'players')"
        >
          <menu.icon class="text-2xl" />
          <p>{{ menu.menu }}</p>
        </div>
      </div>
      <div class="relative p-4">
        <div class="bg-[black] absolute inset-0 -z-[1] opacity-[.6]"></div>
        <div class="mb-4">
          <label class="block mb-1 font-medium text-white text-md"> Select Chess Game Type: </label>
          <select
            @change="handleGameChange"
            v-model="selectedGame"
            class="w-full p-2 py-4 bg-[#333] rounded-md shadow-sm"
          >
            <option class="text-[grey] italic" value="">Select...</option>
            <option value="bullet">Bullet</option>
            <option value="blitz">Blitz</option>
            <option value="rapid">Rapid</option>
          </select>
        </div>
        <!-- ... Other form fields ... -->
        <button class="w-full py-3 bg-[#189918] rounded-md flex justify-center items-center">
          <div>
            <h1 class="text-2xl font-bold text-white">Play</h1>
          </div>
        </button>
        <!-- ... Other buttons ... -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faInfo,
  faPlus,
  faChessBoard,
  faUsers,
  faChessQueen,
  faChessKing,
  faChessRook,
  faChessKnight,
  faChessBishop,
  faChessPawn,
  faRedoAlt,
  faTimes,
  faSignOutAlt,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
  faInfo,
  faPlus,
  faChessBoard,
  faUsers,
  faChessQueen,
  faChessKing,
  faChessRook,
  faChessKnight,
  faChessBishop,
  faChessPawn,
  faRedoAlt,
  faTimes,
  faSignOutAlt,
  faSignInAlt,
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram
)

const selectedPiece = ref(null)
const playerScores = ref([0, 0])
const countdownTime = ref(60)
const activeLink = ref(['newGame', 'games', 'players'])
const selectedGame = ref('')
const selectedTime = ref('')
const peopleOnline = ref([])

const initialChessboard = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
]

const flattenedChessIcons = initialChessboard.flat()
const chessIcons = ref(flattenedChessIcons)

const switchPlayers = () => {
  playerScores.value.reverse()
  selectedPiece.value = null
  countdownTime.value = 60
}

const handlePieceClick = (row, col) => {
  const piece = chessIcons.value[row * 8 + col]

  if (selectedPiece.value) {
    if (selectedPiece.value.row === row && selectedPiece.value.col === col) {
      return
    }

    const newChessIcons = [...chessIcons.value]
    newChessIcons[row * 8 + col] = selectedPiece.value.piece
    newChessIcons[selectedPiece.value.row * 8 + selectedPiece.value.col] = ''
    chessIcons.value = newChessIcons
    selectedPiece.value = null
    switchPlayers()
  } else if (piece) {
    selectedPiece.value = { piece, row, col }
  }
}

const handleGameChange = (event) => {
  selectedGame.value = event.target.value
  selectedTime.value = ''
}

const handleTimeChange = (event) => {
  selectedTime.value = event.target.value
}

async function randomUsers() {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=15')
    peopleOnline.value = response.data.results
  } catch (error) {
    console.log(error)
  }
}

const menu = [
  {
    menu: 'New Game',
    icon: faPlus
  },
  {
    menu: 'Games',
    icon: faChessBoard
  },
  {
    menu: 'Players',
    icon: faUsers
  }
]

const games = [
  {
    gamesNow: 668,
    gamesToday: 1056
  }
]

const gameSideMenu = [
  {
    menu: 'New Game',
    icon: faPlus
  },
  {
    menu: 'Restart',
    icon: faRedoAlt
  },
  {
    menu: 'Players',
    icon: faUsers
  },
  {
    menu: 'About',
    icon: faInfo
  },
  {
    menu: 'Message',
    icon: faTimes
  },
  {
    menu: 'Logout',
    icon: faSignOutAlt
  },
  {
    menu: 'Exit',
    icon: faTimes
  }
]

onMounted(() => {
  randomUsers()
  const timer = setInterval(() => {
    countdownTime.value = Math.max(countdownTime.value - 1, 0)
  }, 1000)

  return () => clearInterval(timer)
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
