//grouping the data by the keys
const obj = [
  {
    key: "Sample 1",
    data: "data 1",
  },
  {
    key: "Sample 1",
    data: "data 1",
  },
  {
    key: "Sample 2",
    data: "data 1",
  },
  {
    key: "Sample 2",
    data: "data 3",
  },
  {
    key: "Sample 12",
    data: "data 1",
  },
  {
    key: "Sample 3",
    data: "data 1",
  },
  {
    key: "Sample 4",
    data: "data 1",
  },

];

const groupingObj = (data) => {
    if(! Array.isArray(data)) return []
  let result = {};
  for (i of data) {

    (result[i.key] ||=[]).push(i);
  }
  return result;
};


