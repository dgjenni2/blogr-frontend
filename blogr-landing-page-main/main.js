$(document).ready(function () {
	$("#mobile-nav-menu-toggle").click(function () {
		let nextIcon = ""
		let isDialogOpen = $("dialog").attr("open")
		if (isDialogOpen) {
			$("dialog").attr("open", null)
			nextIcon = "./images/icon-hamburger.svg"
		} else {
			$("dialog").attr("open", true)
			nextIcon = "./images/icon-close.svg"
		}
		$("#mobile-nav-menu-toggle").attr("src", nextIcon)
	})

	$(".toggle").click(function () {
		let targetNavSection = $(this).data("nav-target")
		let previousToggleState = $("#" + targetNavSection).hasClass("hidden")
		console.log(previousToggleState)
		$(".nav-list").addClass("hidden")
		$(".flip-horizontal").removeClass("flip-horizontal")
		if (previousToggleState) {
			$("#" + targetNavSection).toggleClass("hidden")
			$(this).children("img").toggleClass("flip-horizontal")
		}
	})
})
