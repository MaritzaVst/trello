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
		if (titleCard !== ""){
			$(".wrapper-content").prepend("<div class='list-wrapper card-list'><div class='list-content'></div></div>");
			$(".list-content").html(titleCard);
			$("<div class='add-card-content'><a href='#'>Añadir tarjeta...</a></div>").insertAfter(".list-content");
			$(add).val("");
		}
		addCard();
	});
	function addCard () {
		var anchor = $(".add-card-content").find("a");
		anchor.click(function(e){
			e.preventDefault();
			anchor.addClass("hidden");
			$(".add-card-content").prepend("<textarea></textarea><button class='btn btn-default save'>Guardar</button><span class='glyphicon glyphicon-remove' aria-hidden='true'></span>");
		});
	}
	
});