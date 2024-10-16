// JavaScript用ファイル
const app = new Vue({
    el: '#app',
    data(){
        return {
            text: 'hello Vue.js'
        };
    }
});


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const Taro = new Person('Taro', 24);
console.log(Taro);

const car ={
    bodyType: 'ワゴン'
};

console.log(car.bodyType);
car.bodyType = 'セダン';
console.log(car.bodyType);


