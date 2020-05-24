
/** 
 *  原型模式 与 构造函数 组合模式创建 
 *  根据OOP的思想，属性应该每个实例独有，行为应该独一份。
 *  用到了ECMAScript6的字符串模版
 */
function Shape() {
	this.name = "形状";
	this.width = 100;
	this.height = 80;
}
Shape.prototype.draw = function() {console.info(`${this.name}正在绘制，宽为${this.width}, 高为${this.height}`);}

// use
let a = new Shape();
let b = new Shape();

a.name = "长方形";
a.width  = 120;
a.draw();

b.draw();

// b并没有因为a修改了自己的属性而影响自己的属性
