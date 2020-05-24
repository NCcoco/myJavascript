
/** 借用构造函数 (少些几个js文件起见，就不单单只写一个借用构造函数了，再加上原型链)*/
function Shape() {
	this.name = "形状";
	this.width = 100;
	this.height = 100;
	this.colors = ["red", "blue", "yellow"];
}
Shape.prototype.draw = function() {console.info("正在绘制" + this.name);}


function Rect() {
	Shape.apply(this, arguments);
}
Rect.prototype = new Shape();

// use
let a = new Rect();
let b = new Rect();
a.addColor("white");
console.info(a.colors);
console.info(b.colors);

// 产生的问题是，prototype中多了一份Shape的属性。虽然 Shape.apply(this, arguments) 
// 为Rect添加的属性覆盖了prototype的属性，但是还是造成了内存的浪费
