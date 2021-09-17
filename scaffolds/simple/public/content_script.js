$('body').append("<div class='crawl-btn'>换色</div>")
$('.crawl-btn').click(function(){
  var color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,"0");
  $('body').css("background",color)
})
 chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  var color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,"0");
  document.body.style.backgroundColor=color
});