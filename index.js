const initial = [    ['cbaz', 'adbbzgc', ['cabz', ['zac']]],    ['azcb', 'acbza', 'trzbeac'],    ['b-zaoc', 'ab-cz'] ]

const letters = new Set([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
])


const intersection = (setA, setB) => {
    let _intersection = new Set()
    for (let elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem)
      }
    }
    return _intersection
  }


const findRepeatedLetters = (repeatedLetters,array) => {
    if(Array.isArray(array)) {
        return array.reduce(findRepeatedLetters,repeatedLetters)
    } else {
        const s = new Set(array);
        const repeated = intersection(repeatedLetters, s)
        return repeated;
    }
}

console.log(Array.from(findRepeatedLetters(letters, initial)));