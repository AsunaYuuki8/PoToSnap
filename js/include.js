
function includeHTML(selector, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("File not found: " + file);
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch(error => console.log(error));
}


includeHTML("#section1-placeholder", "partials/Section1.html");
includeHTML("#section7-placeholder", "partials/section7.html");

includeHTML("#footer-placeholder", "partials/footer.html");