const _up = document.getElementById("up");
const _skills = document.getElementById("skills");
const _projects = document.getElementById("projects");
const _contact = document.getElementById("contact");

_up.addEventListener("click", () => {
	
	$("html, body").animate({ scrollTop: 0 }, "slow");
  	return false;
});
_skills.addEventListener("click", () => {
	$("html, body").animate({ scrollTop: 606 }, "slow");
  	return false;
});
_projects.addEventListener("click", () => {
	$("html, body").animate({ scrollTop: 1096 }, "slow");
  	return false;
});
_contact.addEventListener("click", () => {
	$("html, body").animate({ scrollTop: 1546 }, "slow");
  	return false;
});
