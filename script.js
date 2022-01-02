alert("the GET STARTED link will take you to an EXAMPLE of CREATING an ACCOUNT");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".navbar");
btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
});
