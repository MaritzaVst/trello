$(document).ready(function(){
	var add = $(".add");
	add.click(function(e) {
		e.stopPropagation();
		$(".add-list").find("form").addClass("click");
		$(".action-buttons").removeClass("hidden");
	});
	$("html").click(function() {
		$(".add-list").find("form").removeClass("click");
		$(".action-buttons").addClass("hidden");
	});
	$(".save").click(function(e){
		e.preventDefault();
		var titleCard = add.val();
		if (titleCard != ""){
			$(".wrapper").prepend("<div class='js-list card-list'></div>");
			$(".card-list").html(titleCard);
			$(add).val("");
		}
	});
});