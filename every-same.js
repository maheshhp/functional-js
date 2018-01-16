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

console.log("Verifying all valid users : ", verifyValid(
    [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ],
    [
      { id: 2 },
      { id: 1 }
    ]));

// module.exports = checkUsersValid
