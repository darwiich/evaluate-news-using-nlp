const fetch = require("node-fetch");

function handleSubmit(event) {
  event.preventDefault();

  let results = document.getElementById("results");
  results.innerHTML = "";
  // check what text was put into the form field
  let enteredUrl = document.getElementById("name").value;
  console.log("::: Form Submitted :::");
  if (Client.check(enteredUrl)) {
    postData("http://localhost:8081/post", { url: enteredUrl }).then((res) => {
      results.innerHTML = `<div> Agreement: ${res.agreement} </div>
    <div> Confidence: ${res.confidence} </div>
    <div> Irony: ${res.irony} </div>
    <div> Score Tag: ${res.score_tag} </div> 
    <div> Subjectivity: ${res.subjectivity} </div>`;
    });
  } else {
    alert("Please enter a Valid URL");
  }
}

const postData = async (url = "", data = {}) => {
  const resposne = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  });
  try {
    const redata = await resposne.json();
    return redata;
  } catch (error) {
    console.log("error", error);
  }
};

export { handleSubmit };
