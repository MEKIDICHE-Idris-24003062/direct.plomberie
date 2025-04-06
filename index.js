function scrollToContact() {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
  
  function submitForm(event) {
    event.preventDefault();
    document.getElementById("successMsg").style.display = "block";
    setTimeout(() => {
      document.getElementById("successMsg").style.display = "none";
    }, 5000);
  }
  