const infoBtn = document.querySelector(".med-info-btn");
const returnBtn = document.querySelector(".info-back-btn");
const wrapper = document.querySelector(".wrapper");
const toggleBtn = document.getElementById("info-btn");
const wpBtn = document.querySelector(".wp-anchor");

const switchScreen = () => {
  wrapper.classList.toggle("show-info");
}

infoBtn.addEventListener("click",switchScreen);
returnBtn.addEventListener("click",switchScreen);



/* Add Photo Functions */

const medImg = document.getElementById("med-img");
const imgInput = document.getElementById("img-input");

imgInput.onchange = function()
{
  medImg.src = URL.createObjectURL(imgInput.files[0]);
}

infoBtn.onclick(switchScreen);


const renderDetails = () => 
{
  const categoryTasks = tasks.filter(
    (task) =>
      task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  categoryTasks.forEach((task) => {
    const div = document.createElement("div");
    div.classList.add("info-wrapper");
    div.innerHTML = `
    <div class="image-wrapper">
      <img src="no-image.jpg" id="med-img">
    </div>
    <div class="img-input-box">
      <div>
        <label for="img-input">
          Upload Image
        </label>
      </div>
      <input type="file" accept="image/jpg, image/jpeg, image/png" id="img-input">
    </div>
    <div class="med-details">
      <br>
      Name: ${task.id}
      <br> 
      Type: ${task.type}  
      <br> 
      Category: ${task.category}

    </div>
    `;
  }
  
  )
}


/*
// Parse the query parameters
const params = new URLSearchParams(window.location.search);
const medicineId = params.get("id");

// Fetch tasks from localStorage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Find the selected medicine
const selectedMedicine = tasks.find((task) => task.id == medicineId);


if (selectedMedicine) {
  document.getElementById("medicine-name").textContent = `Name: ${selectedMedicine.medicine || "N/A"}`;
  document.getElementById("medicine-category").textContent = `Category: ${selectedMedicine.category || "N/A"}`;
  document.getElementById("medicine-time").textContent = `Time: ${selectedMedicine.time || "N/A"}`;
  document.getElementById("medicine-status").textContent = `Status: ${selectedMedicine.completed ? "Completed" : "Pending"}`;
  
  const phoneNumber = selectedMedicine.phone || "N/A";
  const whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I am out of ${selectedMedicine.medicine} Can you please get it for me!!`;

  document.getElementById("medicine-phone").textContent = `Phone: ${phoneNumber}`;
  // if (phoneNumber !== "N/A") {
  //   document.getElementById("whatsapp-link").href = whatsappLink;
  // }
} else {
  document.querySelector(".medicine-details").innerHTML = "<p>Medicine not found!</p>";
}
*/

function openWP() 
{
  //let phoneNumber = 7008923430;
  const whatsappLink = `https://web.whatsapp.com/send?phone=7008923430&text=Hello! I am out of Medicines Can you please get it for me!!`;

  wpBtn.href = whatsappLink;
}

