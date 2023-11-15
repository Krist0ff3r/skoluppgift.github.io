var tvShows = JSON.parse(localStorage.getItem("tvShows")) || [];

window.onload = function () {
  displayShows(tvShows);
};

function addShow() {
  var showTitle = document.getElementById("showTitle").value.trim();
  var description = document.getElementById("showDescription").value.trim();
  var ageRating = document.getElementById("ageRating").value.trim();

  if (showTitle && description) {
    tvShows.push({
      title: showTitle,
      description: description,
      ageRating: ageRating,
    });
    localStorage.setItem("tvShows", JSON.stringify(tvShows));
    
    
    
  } else {
    alert("Du glömde fylla i en ruta");
  }
}
function displayShows(tvShows, listElementId) {
  var list = document.getElementById(listElementId);
  list.innerHTML = "";
  tvShows.forEach(function (show) {
    var entry = document.createElement("li");
    entry.appendChild(
      document.createTextNode(
        show.title
      )
    );
    entry.addEventListener("click", function () {
      handleShowClick(show);
    });

    entry.addEventListener("mouseover", function () {
      handleMouseOver(show, entry);
    });
    entry.addEventListener("mouseout", function () {
      handleMouseOut(entry);
    });

    list.appendChild(entry);
  });

  }
  function handleShowClick(show) {
    var detailsDiv = document.getElementById("showDetailsOnClick");
    detailsDiv.style.display = "block";

    document.getElementById("detailTitle").textContent = show.title;
    document.getElementById("detailDescription").textContent =
      "Beskrivning: " + show.description;
    document.getElementById("detailAgeRating").textContent =
      "Åldersgräns: " + show.ageRating;
  }

  function handleMouseOver(show, element) {
    console.log("Mouse over:", show.title);
    element.style.backgroundColor = "#ddd"; 
  }

  function handleMouseOut(element) {
    console.log("Mouse out:", element.textContent);
    element.style.backgroundColor = "#f4f4f4"; 
  }

  window.onload = function () {
    displayShows(tvShows, "tvShowList");
  };


function searchShow() {
  var searchText = document
    .getElementById("searchShow")
    .value.trim()
    .toLowerCase();
  if (searchText.length <= 0) {
    searchText.clear;
  } else {
    var filteredShows = tvShows.filter(function (show) {
      return show.title.toLowerCase().includes(searchText);
    });
    displayShows(filteredShows, "searchResultList");
  }
}
  


function clearLocalStorage(){
    localStorage.clear();
    location.reload();
}