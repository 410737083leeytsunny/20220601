var inputElement
var txts = []
let colors
let colors1 = "ffbe0b-fb5607-ff006e-8338ec-3a86ff".split("-").map(tx=>"#"+tx)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	inputElement = createInput("")
	inputElement.position(50,50)
	inputElement.input(userInput)
}
function userInput(){
	txts.push({
		text: this.value(),
		x:width/2,
		y:50,
		vx:random(-1,1),
		vy:1,
		color:random(colors1)
	})
	this.value('')
}
function draw() {
	background(0);
	fill(255)
	textSize(50)
	for(var i=0;i<txts.length;i++){
		let txt = txts[i]
		fill(txt.color)
		text(txt.text, txt.x, txt.y)
		txt.x = txt.x + txt.vx
		txt.y = txt.y + txt.vy
		txt.vx*=0.995
		txt.vy*=0.995
		txt.vy = txt.vy + 0.1
		if(txt.y>height){
			txt.vy = -abs(txt.vy)
		}
	}
}