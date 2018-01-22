function loadUsers(userIds, load, done) {
  let users = [];
  let counter = 0;
  userIds.forEach(function (data) {
    load(data, function (ret) {
      users[counter++] = ret;
      if (counter === userIds.length) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
