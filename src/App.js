import './App.css';
import GlobalStyles from './styles/Global';

function App() {

  /* function generateArr(num) {
    const arr = []
    let randomNum = Math.floor(Math.random() * 20)
    for (let i = 0; i < num; i++) {
      while (arr.some(item => item.back === randomNum)) {
        randomNum = Math.floor(Math.random() * 20)
      }
      arr.push({back: randomNum, flipped: false})
      arr.push({back: randomNum, flipped: false})
      randomNum = Math.floor(Math.random() * 20)
    }
    return arr
  }

  function shuffleArr(arr) {
    let currentIndex = arr.length, randomIndex
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr
  } */

  return (
    <>
      <GlobalStyles />
    </>
  );
}

export default App;
