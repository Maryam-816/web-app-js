// pure functions

export function getRandomArbitrary(min, max) {
  if (!min || !max) {
    return 0;
  }

  if (min > max) {
    throw new RangeError('Min must be less than max!');
  }

  if (min == max) {
    throw 'Min cannot be equal to max';
  }


  return Math.ceil(Math.random() * (max - min) + min);
}
