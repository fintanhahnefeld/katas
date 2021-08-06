function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, val) => {
      if (val !== true) return acc +0
      if (val === true) return acc +1
    },0)
  }
  
  countSheeps([true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ])