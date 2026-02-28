document.getElementById("shorted-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData.get("url"));
  const url = formData.get("url");
  const shortName = formData.get("shortName");

  console.log(url, shortName);
});
