var parent, ripple, d, x, y;
$("a").click(function(e){
	parent = $(this).parent();
	//create .ripple element if it doesn't exist
	if(parent.find(".ripple").length == 0)
		parent.prepend("<span class='ripple'></span>");
		
	ripple = parent.find(".ripple");
	//incase of quick double clicks stop the previous animation
	ripple.removeClass("animate");
	
	//set size of .ripple
	if(!ripple.height() && !ripple.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ripple.css({height: d, width: d});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ripple.width()/2;
	y = e.pageY - parent.offset().top - ripple.height()/2;
	
	//set the position and add class .animate
	ripple.css({top: y+'px', left: x+'px'}).addClass("animate");
})  