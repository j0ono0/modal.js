
// Listener for actions that launch a modal dialogue
var ModalLauncher = function(){
	this.modals = $(".modal");
	this.triggers = [];

	var modal = this;

	// Initialise: find all links to modals
	for(var i=0; i < this.modals.length; i++){
		var id = this.modals[i].id;
		this.triggers.push(id);
	}
	// Listen for clicks on triggers
	$(document).on('click',function(e){
		if (e.target.hasAttribute("href")){
			var hash = e.target.hash.substr(1);
			if(modal.triggers.indexOf(hash) != -1){
				new Modal(hash);
			}
		}
	});
}
var modalLauncher = modalLauncher || new ModalLauncher();

var Modal = function(id){
    this.id = id;
    this.elem = $("#"+id);
    this.close = close;

    var modal = this;

    // Lauch modal on creation of object
    this.elem.addClass('modal--open');
    $(".modal__close--"+this.id).on('click.'+this.id,function(e){
    	modal.close();
    });
	
	function close(){
    	this.elem.removeClass('modal--open');
		$(".modal__close--"+this.id).off('click.'+this.id);	    
	}
};


//////////////////////////////////
function log(msg){
	console.log(msg);
}