function postButton(){

    const postButton = document.getElementById("postButton");
  //   const result = document.getElementById("result");
  
    postButton.addEventListener("click", () => {
      const dataToSend = { key: "value" };
  
      fetch("http://localhost:8080/v1/ticket/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          result.textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    });
  }