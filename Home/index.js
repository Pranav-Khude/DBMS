function anim() {
  var setting = document.querySelector("#setting");
  var img2 = document.querySelector("#image2");
  var img3 = document.querySelector("#image3");

  setting.addEventListener("mouseover", on);

  setting.addEventListener("mouseout", off);

  var c = 0;

  function on() {
    document.querySelector("#setting > svg").style.transform = "rotate(180deg)";
  }

  function off() {
    document.querySelector("#setting > svg").style.transform = "rotate(0deg)";
  }

  function f1() {
    setting.style.left = "23%";
    setting.style.top = "30%";
    img2.style.left = "-4%";
    img2.style.top = "75%";
    img3.style.left = "-4%";
    img3.style.top = "-5%";
  }

  function f2() {
    setting.style.left = "-4%";
    setting.style.top = "-4%";
    img2.style.left = "23%";
    img2.style.top = "30%";
    img3.style.left = "-4%";
    img3.style.top = "75%";
  }

  function f3() {
    img2.style.left = "-4%";
    img2.style.top = "-4%";
    img3.style.left = "23%";
    img3.style.top = "30%";
    setting.style.left = "-4%";
    setting.style.top = "75%";
  }
  setting.addEventListener("click", f1);
  img2.addEventListener("click", f2);
  img3.addEventListener("click", f3);
}
