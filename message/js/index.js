this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Hey Banda.... Hope we are together at this part of time. But Odds are against us..      Sooorrrry!! nijam cheppali ante nenu marchipoya ra Birthday, One day lo cheyalsi vachindhi so it may be not that good!! But my wishes are as good as your INNER HEART";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}

