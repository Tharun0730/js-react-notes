function deepEqual(obj1, obj2) {

  if (obj1 === obj2) {
    return true;
  }

  
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }


  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }


  for (let key in obj2) {
    if (!(key in obj1)) {
      return false;
    }
  }

  return true;
}
