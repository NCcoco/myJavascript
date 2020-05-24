/** 构造函数创建对象 */
function Person() {
	this.name = "coco";
	this.age = 25;
	this.sayName = function() {console.info(this.name + "你好")}
}

// use
let a = new Person();
let b = new Person();
//缺点 ： 每个实例的行为也是一个独立的对象，这不符合OOP的思想。
