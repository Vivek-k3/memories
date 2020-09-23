this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Hey Banda.... Hope we are together at this part of time. But Odds are against us..      Chala takkuva time unde ra.., One day lo cheyalsi vachindhi so it may be not that good!! But my wishes are as pure as your INNER HEART Missing you a lot daa..... Lets catch up sometime very soon and will rock in your way for sure. Aythe mari continue chedham konni elements phone lo baguntai konni laptop lo so redu chudu responsive desgin cheyadaniki time lekapaiii.... Okay!! :) " ;  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
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

