function getShortMessages(messages) {
  let shortMsg = messages.filter(a => {if(a.message.length < 50) return true; return false;}).map(a => a.message);
  return shortMsg;
}

function verifyGetMsg(messages, num) {
  let returnedMsg = getShortMessages(messages);
  if (returnedMsg.length === num) {
    return true;
  }
  return false;
}

// console.log("Returning messages less than 50 characters : ", verifyGetMsg([{message: 'jhadfgHJADFGJHAFGHJGFHJGFHJGFAJGJHGghgfjhgdfjhgdhgfjhgdfhjgdhgdhhfgfsghjsghjgfhjgfhjghdsfjdgfjhsgdfhjgfjhgdgfjhdsgfdsfgfjdgfjdgfj'}, {message: 'abcdefg'}], 1));

module.exports = getShortMessages
