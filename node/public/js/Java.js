// Date and Time
setInterval(function () {
    var date = new Date();
    document.getElementById("time").innerHTML = date;
  }, 1000);
  
  // 
  var count = 1
  setInterval(function () {
    document.querySelector('#R' + count).click();
    count++;
  
    if (count > 4) {
      count = 1
    }
  }, 2000)
  
  
  
  // Typescript
  const quoteText = document.querySelector(".quote-text");
  
  let quote = quoteText.textContent;
  quoteText.textContent = "";
  
  let i = 0;
  let j = 0;
  let speed = 35;
  
  function typeWriter() {
    if (i < quote.length) {
      quoteText.textContent += quote.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      if (j < author.length) {
        small.textContent += author.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
      }
    }
  }
  
  typeWriter();
  
  
  // About US
  const readMoreBtn1 = document.getElementById('read-more-btn1');
  const readMoreBtn2 = document.getElementById('read-more-btn2');
  const readMoreBtn3 = document.getElementById('read-more-btn3');
  const readMoreBtn4 = document.getElementById('read-more-btn4');
  
  const popupContainer = document.getElementById('popup-container');
  const closeBtn = document.getElementById('close-btn');
  
  readMoreBtn1.addEventListener('click', function () {
      popupContainer.style.display = 'block';
  });
  
  readMoreBtn2.addEventListener('click', function () {
      popupContainer.style.display = 'block';
  });
  readMoreBtn3.addEventListener('click', function () {
      popupContainer.style.display = 'block';
  });
  readMoreBtn4.addEventListener('click', function () {
      popupContainer.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', function () {
      popupContainer.style.display = 'none';
  });
  // END
  
  // 
  const exportBtn = document.getElementById('export-btn');
  const table = document.getElementById('transaction-table');
  
  exportBtn.addEventListener('click', () => {
    const pdfName = 'Transaction.pdf';
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      pagesplit: true,
      background: '#fff',
      useCORS: true
    };
  
    html2canvas(table, options)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 40, 40, 500, 500);
        doc.save(pdfName);
      });
  });
  // 
  
  
  // Calculator
  function calculateFare() {
    var distance = document.getElementById("distance").value;
    var fuelType = document.getElementById("fuelType").value;
    var passengers = document.getElementById("passengers").value;
  
    var fuelCostPerLiter;
    if (fuelType === "petrol") {
      fuelCostPerLiter = 111.73;
    } else if (fuelType === "diesel") {
      fuelCostPerLiter = 178;
    }
  
    var fuelCostPerKm = fuelCostPerLiter / 100;
    var totalFuelCost = distance * fuelCostPerKm;
    var fixedProfit = 50;
    var totalCost = (totalFuelCost + fixedProfit) * passengers;
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "The total cost for the trip is: RS " + totalCost.toFixed(2);
  }
  // END
      var map;
      var marker;
      
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7749, lng: -122.4194},
          zoom: 8
        });
        
        marker = new google.maps.Marker({
          position: map.getCenter(),
          map: map,
          draggable: true
        });
        
        google.maps.event.addListener(marker, 'dragend', function() {
          var position = marker.getPosition();
          document.getElementById('latitude').value = position.lat();
          document.getElementById('longitude').value = position.lng();
          reverseGeocode(position.lat(), position.lng());
        });
        
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('destination'));
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (place.geometry) {
            map.setCenter(place.geometry.location);
            map.setZoom(14);
            marker.setPosition(place.geometry.location);
            document.getElementById('latitude').value = place.geometry.location.lat();
            document.getElementById('longitude').value = place.geometry.location.lng();
            document.getElementById('location').value = place.name;
            calculateRoute(place.geometry.location);
          } else {
            alert("Destination not found");
          }
        });
      }
      
      function reverseGeocode(lat, lng) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'location': {lat: lat, lng: lng}}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              document.getElementById('location').value = results[0].formatted_address;
            }
          } else {
            console.log('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
      
      function calculateRoute(destination) {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer({
          map: map
        });
        
        directionsService.route({
          origin: marker.getPosition(),
          destination: destination,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            alert('Directions request failed due to ' + status);
          }
        });
      }
  