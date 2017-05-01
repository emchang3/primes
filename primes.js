for (let i = 1; i < 101; i++) {
  let isPrime = true;
  for (let j = 1; j < i; j++) {
    if (i % j === 0 && j !== 1 && j !== i) isPrime = false;
  }
  if (isPrime === true) console.log(i);
}
