const button = () => {
  const containers = document.querySelectorAll(".card-container");

  containers.forEach((container) => {
    const frontBtn = container.querySelector(".fron-icon");
    const backBtn = container.querySelector(".top-arrow");

    if (frontBtn) {
      frontBtn.addEventListener("click", function () {
        container.classList.add("rotated");
      });
    }

    if (backBtn) {
      backBtn.addEventListener("click", function () {
        container.classList.remove("rotated");
      });
    }
  });
};



function from() {
  const btn = document.getElementById("btn");
  const inputs = document.querySelectorAll(".inputsValue");
  const inputNumber = document.getElementById("numberInput");

  btn.addEventListener("click", function () {
    let checkValue = true;
    inputs.forEach((element) => {
      if (element.value.trim() === "") {
        checkValue = false;
      }
    });
    if (!checkValue || inputNumber.value.length < 10) {
      alert("Fill Out The From");
    } else {
      alert("Form submitted successfully!");
    }
  });
}



function AddToCard(event) {
  
  const doctorData = JSON.parse(event.target.getAttribute("data-doctor"));
  const appoinmentProfile = document.querySelector(".appinments-info");
  const apoinmentCard = document.createElement("div");
  apoinmentCard.classList.add("add-to-card");

  apoinmentCard.innerHTML = `
      <div class="doctors-info">
          <div class="doctor-image">
              <img src="${doctorData.img}" alt="${doctorData.Name}" />
          </div>
      </div>
      <div class="doctors-info">
          <h1>${doctorData.Name}</h1>
          <p>${doctorData.doctorAbout}</p>
          <div class="expriance">
              <i class="fas fa-user"></i>
              <h5>${doctorData.Expriance}</h5>
          </div>
          <div class="expriance">
              <i class="fas fa-graduation-cap"></i>
              <h5>${doctorData.Degree}</h5>
          </div>
          <div class="expriance">
              <i class="fas fa-language"></i>
              <h5>${doctorData.Language}</h5>
          </div>
      </div>
  `;

  
  appoinmentProfile.appendChild(apoinmentCard);
  console.log(appoinmentProfile);
}




export default { button, from, AddToCard };
