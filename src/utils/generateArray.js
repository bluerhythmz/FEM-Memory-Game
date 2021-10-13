export const generateArr = (num) => {
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