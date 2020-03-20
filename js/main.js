fetch("https://danepubliczne.imgw.pl/api/data/synop")
  .then(response => response.json())
  .then(weather => {
    console.log(weather);
    weather.forEach(element => {
      var container = document.createElement("div");
      var city = document.createElement("h2");
      var temperature = document.createElement("p");
      city.innerHTML = element.stacja;
      temperature.innerHTML = `- temperatura: ${element.temperatura}`;
      container.appendChild(city);
      container.appendChild(temperature);
      container.classList.add("container");
      element.temperatura > 10
        ? container.classList.add("hot")
        : container.classList.add("cold");
      document.getElementById("holder").appendChild(container);
    });
  });

//Dodatkowe rozwiazanie w jQuery
// $(function() {
//   $.getJSON("https://danepubliczne.imgw.pl/api/data/synop", function(weather) {
//     $(weather).each(element => {
//       var container = $('<div class="container"></div>');
//       container.append("<h2>" + weather[element].stacja + "</h2>");
//       container.append(
//         "<p>" + "- temperatura: " + weather[element].temperatura + "</p>"
//       );
//       $("#holder").append(container);
//     });
//   });
// });
