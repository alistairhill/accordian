function goGo() {
  function menuOpen() {
    var menu = document.querySelector("nav.main-menu");

    menu.addEventListener("click", function(e) {
      if (e.target.tagName.toLowerCase() === "i") {
        var li = e.target.parentNode.parentNode,
        subMenu = li.lastElementChild;
      if (subMenu.tagName.toLowerCase() === "ul") {
        if (subMenu.style.maxHeight === "500px") {
          subMenu.style.maxHeight = "0px";
          e.target.innerHTML = "+";
        } else {
          e.target.innerHTML = "-";
          subMenu.style.maxHeight = "500px";
        }
      }
      }
    })
  }

  menuOpen();
}

window.onload = goGo();