
var Modal = function(id){
	this.id = id;
	this.elem = $('#'+id);
	this.openLinks = $("[href='#"+this.id+"']").toArray();
	this.open = open;
	this.close = close;

	var modal = this;
	var closeLinks = $('.close--'+this.id).toArray();
	var modalBg = $("<div></div>").addClass('modal__bg');
	var scrollY = 0;

	function open(){
		scrollY = $(window).scrollTop();
		modalBg.css({'margin-top':-scrollY});
		this.elem.addClass('modal--open');
		$("body").wrapInner(modalBg);
	}
	function close(){
		this.elem.removeClass('modal--open');
		$(".modal__bg").contents().unwrap();
		$(window).scrollTop(scrollY);
	}

	// Open modal listeners
	for(var i=0; i < this.openLinks.length; i++){
		$(this.openLinks[i]).on('click',function(e){
			modal.open();
			e.preventDefault();
		});
	}
	// Close modal listeners
	for(var i=0; i < closeLinks.length; i++){
		$(closeLinks[i]).on('click',function(e){
			if($(e.target).hasClass('close--'+modal.id)){
				modal.close();
				e.preventDefault();
			}
		});
	}
}

var modals = $(".modal").toArray();

for(var i=0; i<modals.length; i++){
	var modal = new Modal(modals[i].id);
}

//////////////////////////////////
function log(msg){
	console.log(msg);
}