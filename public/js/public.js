const fadeIn = element => {
  element.style.opacity = 1;
};

const fadeOut = element => {
  element.style.opacity = 0;
};

const openSidebar = () => {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.width = "100%";
  sidebar.style.opacity = "0.97";
};

const closeSidebar = () => {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.width = "0%";
  sidebar.style.opacity = "0";
};

window.onresize = resize;

function resize() {
  if (document.documentElement.clientWidth > 1000) {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "270px";
    sidebar.style.opacity = "1";
  }
}

function toggleFolder() {
  var folder = document.getElementById("folder");
  var foldGroup = folder.nextSibling;
  var toggle = folder.firstElementChild;
  if (folder.hasAttribute("status")) {
    folder.removeAttribute("status");
    foldGroup.style.height = "0";
    foldGroup.style.opacity = "0";
    foldGroup.style.pointerEvents = "none";
    toggle.setAttribute("class", "iconfont icon-arrow_d");
  } else {
    folder.setAttribute("status", "open");
    foldGroup.style.height = "100%";
    foldGroup.style.opacity = "1";
    foldGroup.style.pointerEvents = "auto";
    toggle.setAttribute("class", "iconfont icon-arrow_u");
  }
}
