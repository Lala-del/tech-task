const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar-menu");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

    }



var skills = {
  ht: 92,
  wp: 75,
  mg: 86,
  ux: 88
 };

$.each(skills, function(key, value) {
  var skillbar = $("." + key);

  skillbar.animate(
    {
      width: value + "%"
    },
    3000,
    function() {
      $(".skill__bar__inside").fadeIn();
    }
  );
}); 