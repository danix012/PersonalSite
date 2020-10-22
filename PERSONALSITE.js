
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.body.style.backgroundColor = "#d2f5e3";
      document.getElementById("main").onclick = function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "#d2f5e3";
    }
    }
    
   

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.body.style.backgroundColor = "#d2f5e3";
    }



    // function openDropdown() {
    //   document.getElementById("dropdown-container").style.height = "0";
   
    //   var dropdown = document.getElementsByClassName("dropdown-btn");
    // var i;
    

// if        dropdown[i].addEventListener("mouseover", function() {
//       this.classList.toggle("active");
//       var dropdownContent = this.nextElementSibling;
//       if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//       } else {
//       dropdownContent.style.display = "block";
//       }
//       });
//     }