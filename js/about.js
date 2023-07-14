function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on the page load
  reveal();




// Download CV button

  document.getElementById('downloadBtn').addEventListener('click', function() {
    // File URL of the resume
    var fileUrl = '../files/cv.pdf';
    
    // Create a temporary link element
    var link = document.createElement('a');
    
    // Set the link's href attribute to the file URL
    link.href = fileUrl;
    
    // Set the download attribute to specify the filename
    link.download = 'KristinKarlsenCV.pdf';
    
    // Append the link to the document body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the document body
    document.body.removeChild(link);
  });