/** 原型模式创建对象 */
function Person() {
}
Person.prototype.name = "coco";
Person.prototype.age = 25;
Person.prototype.equipment = ["计算机", "鼠标", "键盘"];
Person.sayHi = function() {console.info(this.name + "你好");}

let a = new Person();
let b = new Person();
// 虽然说原型模式无法替换基本类型，但是可以修改引用类型
// 因此会产生问题；
a.equipment.push("鼠标垫");
console.info(a.equipment);
console.info(b.equipment);
// 原型模式共享 属性和函数，导致引用类型一旦被修改，所有实例都将受到影响。
