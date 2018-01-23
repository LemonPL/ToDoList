// check off specific todos by clicking
$("ul").on("click", "li", function(){  // we are listening for lis in ul
	// if li is grey then we will turn it black else turn it grey
	$(this).toggleClass("completed");
});

// click on "x" to delete a todo

$("ul").on("click", "span", function(event){ // to eliminate 'event bubbling'
 event.stopPropagation();
 $(this).parent().fadeOut(500,function(){ // because fadeOut solely does not remove an element completely
 	$(this).remove();
 });
});

// adding new todo

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})