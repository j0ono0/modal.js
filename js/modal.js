
function closeModal(){
	$modal.removeClass('modal--open');
	// Remove close modal listener
	$(document).off('click.modal');
}
function openModal(id){
	$modal = $(id);
	$modal.addClass("modal--open");
	// Add close modal listener
	$(document).on('click.modal',function(e){
		if(	
			(
			!$(e.target).hasClass("modal--open") && 
			!$(e.target).parents().hasClass("modal--open")
			)||
			$(e.target).hasClass("close-modal")
		){
			closeModal();
		}
	});
}

$modalTriggers = $(".modal-trigger");

$modalTriggers.on('click',function(e){
	e.preventDefault();
	e.stopPropagation();
	openModal($(this).attr("href"));
})



//////////////////////////////////
function log(msg){
	console.log(msg);
}