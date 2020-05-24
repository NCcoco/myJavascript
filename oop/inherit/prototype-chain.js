/** 原型链继承 */
function Shape() {
	this.name = "形状";
	this.width = 100;
	this.height = 100;
	this.colors = ["red", "blue", "yellow"];
}
Shape.prototype.draw = function() {console.info("正在绘制" + this.name);}

function Rect() {
}
// 关键在这里， prototype指向 Shape，既有了Shape的prototype属性，也有了一份原本希望每个实例都独立的属性
Rect.prototype = new Shape();
Rect.prototype.addColor = function(color) {this.colors.push(color)}

// use
let a = new Rect();
let b = new Rect();
a.addColor("white");
console.info(a.colors);
console.info(b.colors);

// 缺陷： 使用原型链继承将导致 Shape的属性变为共享对象
// 可以使用 借用构造函数继承解决这个问题
