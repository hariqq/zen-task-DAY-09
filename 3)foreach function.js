//c)Print the following details name, capital, flag using forEach function

var newRequest = new XMLHttpRequest();

//we will send a instruction by applying on load
newRequest.onload = function () {
  if (newRequest.status >= 200 && newRequest.status <= 400) {
    var x = JSON.parse(newRequest.response);
    x.forEach(
      (x) => console.log(`name:${x.name}, capital:${x.capital}, flag:${x.flag}`) //to display respective countries' name, capital, flag in the console
    );
  } else {
    console.log(this.responseText);
  }
};

newRequest.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
newRequest.send();
