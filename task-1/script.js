const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetch("http://worldtimeapi.org/api/timezone/Europe/Kiev")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }
      return response.json();
    })
    .then(
      (data) => (btn.textContent = `Your vote is accepted: ${data.datetime}`)
    )
    .catch((error) => {
      console.error("Error!", error);
    });
});
