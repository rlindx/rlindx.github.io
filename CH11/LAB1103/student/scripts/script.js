/*
Author:  Rob Lindauer
Date:  2026-04-29
Filename:  script.js
Purpose:  Scripts for CH10 LAB3
*/



/* Hamburger menu function */

function hamburger() {
	
	var navlinks = document.getElementById("nav-links");
	var menuicon = document.getElementById("icon");
	
	if (navlinks.style.display === "block") {		
		navlinks.style.display = "none";
		menuicon.style.color = "#2a1f14";
	} else {
		navlinks.style.display = "block";
		menuicon.style.color = "#f6eee4";
	}
}

