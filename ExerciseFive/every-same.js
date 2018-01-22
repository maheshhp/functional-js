function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(a => goodUsers.some(z => a.id === z.id));
  };
}

function verifyValid(goodUsers, validList) {
  let validInit = checkUsersValid(goodUsers);
  return validInit(validList);
}

console.log('Verifying all valid users : ', verifyValid(
  [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ],
  [
    { id: 2 },
    { id: 1 }
  ]) === true);

console.log('Verifying all invalid users : ', verifyValid(
  [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ],
  [
    { id: 4 },
    { id: 1 }
  ]) === false);

console.log('Verifying zero submitted users : ', verifyValid(
  [ { id: 1 },
    { id: 2 },
    { id: 3 } ],
  [ ]) === true);

console.log('Verifying zero submitted users : ', verifyValid(
  [ ],
  [ { id: 1 },
    { id: 2 },
    { id: 3 } ]
) === false);

module.exports = checkUsersValid;
