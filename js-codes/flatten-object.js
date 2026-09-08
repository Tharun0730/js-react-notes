const obj = {
  name: "John",
  address: {
    city: "Chennai",
    country: "India",
  },
  skills: {
    frontend: {
      javascript: "Advanced",
      react: "Intermediate",
    },
  },
};

function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

console.log(flattenObject(obj));
