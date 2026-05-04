/*
Author:  Rob Lindauer
Date:  2026-04-27
Filename:  scripts.js
Purpose:  Scripts for CH10 LAB1
*/

/* Hamburger menu function */

function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}
