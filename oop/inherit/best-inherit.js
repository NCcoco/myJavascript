
function inheritProperty(subType, superType) {
	let prototype = object(superType.prototype);
	subType.prototype = prototype;
	subType.prototype.constructor = subType;

	function object(o) {
		function F(){}
		F.prototype = o;
		return new F();
	}
}

/** 将寄生、原型式、借用组合在一起 */
function Shape() {
	this.name = "形状";
	this.width = 100;
	this.height = 100;
	this.colors = ["red","yellow", "white"];
}

Shape.prototype.draw = function() {console.info(this.name + "正在绘制...");}

function Rect() {
	// 继承属性 并成为独立属性
	Shape.call(this, arguments);
	this.angles = [90,90,90,90];
}
// 继承prototype
inheritProperty(Rect, Shape);
// 必须调用继承后再定义子类自己的行为
Rect.prototype.showAngles = function () {console.info(this.angles)}

// use
let a = new Rect();
let b = new Rect();
// test
