(function(){
	var Modal = function(id){
		var id = id,
			modal = this,
			elem = $('#'+id),
			openLinks = $("[href='#"+id+"']").toArray(),
			closeSelector = '.close--'+id, //add this class to elements that close the modal overlay
			closeLinks = $(closeSelector).toArray(),
			modalBg = $("<div></div>").addClass('modal__bg'),
			scrollY = 0,
			open = function(event){
				scrollY = $(window).scrollTop();
				modalBg.css({'margin-top':-scrollY});
				elem.addClass('modal--open');
				$("body").wrapInner(modalBg);
				event.preventDefault();
			},
			close = function(event){
				if(closeLinks.indexOf(event.target) !== -1){
					elem.removeClass('modal--open');
					$(".modal__bg").contents().unwrap();
					$(window).scrollTop(scrollY);
				}
				event.preventDefault();
			};
		// Open modal listeners
		for(var i=0; i < openLinks.length; i++){
			openLinks[i].addEventListener('click', open, false);
		}
		// Close modal listeners
		for(var i=0; i < closeLinks.length; i++){
			closeLinks[i].addEventListener('click', close, false);
		}
	}
	// Initialise modal overlays
	var modals = $(".modal").toArray();
	for(var i=0; i<modals.length; i++){
		var modal = new Modal(modals[i].id);
	}
})();