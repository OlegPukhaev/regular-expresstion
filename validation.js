function requiredEmail(phone) {
  const regular = /^[a-zA-Z_\.0-9]+@[a-z0-9]+\.(com|ru)$/;
  if (regular.test(email)) return true;
  else return false;
}

function requiredPhone(phone) {
  const regular = /^8{1}\d{10}$|^\+7{1}\d{10}$/;
  if (regular.test(phone)) return true;
  else return false;
}

export { requiredEmail, requiredPhone };
