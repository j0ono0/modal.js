
var Modal = function(id){
    this.id = id;
    this.elem = $("#"+id);
    this.triggers = $("[href='#"+this.id+"']");
    this.launch = launch;
    this.hide = hide;
    
    var modal = this;
    var control = control();
    
    function launch(){
        this.elem.addClass('modal--open');
    };
    function hide(){
        this.elem.removeClass('modal--open');
    };
    function control(){
        $(document).on('click.'+this.id,function(e){
            if(e.target.href && e.target.href.split('#')[1] == modal.id){
                modal.launch();
                e.preventDefault();
            }else if(!$(e.target).hasClass('modal--open') && $(e.target).parents(".modal--open").length == 0){
                modal.hide();
            }
        });
    };
};

// Initialise modal overlays
var modals = $(".modal")
modals.each(function(){
    var modal = new Modal(this.id);
});

//////////////////////////////////
function log(msg){
	console.log(msg);
}