function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = emailValue.match(checkMail);
  const thongTin = document.querySelector(".thongtin");
  const nhapMail = document.querySelector(".submit-email");

  if (check) {
    thongTin.style.display = "block";
    nhapMail.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Email không hợp lệ";
  }
}
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}
function handleViewMore(element) {
  const parentElement = element.closest(".col");
  const viewMore = parentElement.querySelector(".control-view");
  const cvContent = parentElement.querySelectorAll(".cv-content");
  if (viewMore.classList.value.includes("view-more")) {
    cvContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "View Less";
  } else {
    cvContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View More";
  }
}
