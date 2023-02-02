function sum(...numbers) {
  return [...numbers].reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5)); //15

function stringIncludes(mainSentence, testWord) {
  return mainSentence.includes(testWord);
}

console.log(stringIncludes('Harits Syah', 'Harits'));

let a = [1, 2, 3, 4];
console.log(...a);
console.log(a);

// function getNames(array) {
//   let c = [];
//   let f = array.filter(a => a.name);
//   for (let a of f) {
//     c.push(Object.values(a));
//   }
//   return c.flat();
// }

function getNames(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty('name')) {
      result.push(array[i].name);
    }
  }
  return result;
}

console.log('getNames', getNames([{}, { name: 'a' }, { yes: 1 }, { name: 'b' }])); // ['a', 'b']
console.log(
  'getNames',
  getNames([{}, { yes: 123 }, { name: 'Haris' }, { yes: 1 }, { name: 'Aura' }])
); // ['Haris', ''Aura]

function indexOfLargestValue(array) {
  let a = array.sort((a, b) => a < b);
  console.log(a);
}

console.log(indexOfLargestValue([18, 45, 12, 0, 1])); //1

function delay(time) {
  let a = setTimeout(() => {
    console.log(`waiting ${time / 1000} second`);
  }, time);
  clearTimeout(a);
}

(async () => {
  console.log('Testing delay');
  await delay(1000);
  console.timeEnd('Testing delay');
})();

useEffect(() => {
  async function getData() {
    let a = await getPokemonList();
    setPokemonList(a);
  }
  getData();
}, []);
