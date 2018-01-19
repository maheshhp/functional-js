function loadUsers(userIds, load, done) {
  let users = [];
  for (let i = 0; i < userIds.length; i++) {
    users.push(setTimeout(function() {
      return load(userIds[i]);
    }), 0);
  }
  return done(users);
}

module.exports = loadUsers;
