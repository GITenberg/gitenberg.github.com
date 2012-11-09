$("div.nav-choice").hover(function(){
 $(this).stop().animate({"top" : "-10px"});
}, function(){
 $(this).stop().animate({"top": "0"});
});
