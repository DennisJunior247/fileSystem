const fs = require("fs");
const fetch = require("node-fetch");

const getJsonData = async () => {
  try {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();

    fs.writeFile("./result/result.json", JSON.stringify(jsonData), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("awwn your file file has been appended");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

getJsonData();
