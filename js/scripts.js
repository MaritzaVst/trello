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
			$(".wrapper").prepend("<div class='list-wrapper card-list'><div class='list-content'></div></div>");
			$(".list-content").html(titleCard);
			$(add).val("");
		}
	});
});