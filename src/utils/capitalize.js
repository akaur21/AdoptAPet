export const capitalize = (str) => {
  let capitalizeString = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      capitalizeString += str[i].toUpperCase();
    } else {
      capitalizeString += str[i];
    }
  }
  return capitalizeString;
};

export const capitalizeArrayOfStrings = (arrayOfString) => {
  const capitalizedArray = arrayOfString.map((str, index) => {
    let capitalizeSubstring = "";
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        capitalizeSubstring += str[i].toUpperCase();
      } else {
        capitalizeSubstring += str[i];
      }
    }
    return capitalizeSubstring;
  });
  return capitalizedArray.join(", ");
};
