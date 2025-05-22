const destinations = [
    { name: "Barselona", type: "Pludmales", description: "Sauļošanās un tapas pie Vidusjūras." },
    { name: "Roma", type: "Kultūra", description: "Antīkas vietas un itāļu virtuve." },
    { name: "Parīze", type: "Kultūra", description: "Romantika un māksla pie Sēnas." },
    { name: "Tokija", type: "Piedzīvojumi", description: "Moderns un tradicionāls Japānas sajaukums." },
    { name: "Sidneja", type: "Pludmales", description: "Skaistas pludmales un Operas nams." }
  ];
  
  function showRecommendations(filter = "") {
    const container = document.getElementById("recommendations");
    container.innerHTML = "";
    destinations.forEach(destination => {
      if (filter === "" || destination.type === filter) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${destination.name}</h3><p><strong>${destination.type}</strong></p><p>${destination.description}</p>`;
        container.appendChild(card);
      }
    });
  }
  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === "" || email === "") {
      alert("Lūdzu, aizpildiet visus laukus!");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Lūdzu, ievadiet korektu e-pasta adresi!");
      return false;
    }
  
    return true;
  }
  
  window.onload = function () {
    const rec = document.getElementById("recommendations");
    if (rec) {
      showRecommendations();
  
      const listItems = document.querySelectorAll("#left-content li");
      listItems.forEach(li => {
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
          showRecommendations(li.textContent);
        });
      });
    }
  };
  
    