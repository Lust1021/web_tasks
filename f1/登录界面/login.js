$("input").on('focus','input',function(){
	$(this).siblings('label').stop().animate({"bottom": "50px"}, 500);
	$(this).next(".bottom-line").stop().animate({"width": "400px"}, 500);
})
.on('focusout','input',function(){
	$(this).siblings('label').stop().animate({"bottom": "10px"}, 500);
    $(this).next(".bottom-line").stop().animate({"width": "0"}, 500);
})