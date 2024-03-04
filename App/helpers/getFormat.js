export const getDigitAvatar = userName => { 
  return userName.toUpperCase().charAt(0);
}

export const formatDate = date => {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return day + '/' + (month + 1) + '/' + year;
}