var array = [];

array.push(
    function (index) {
        console.log("Hello world " + index);
    }
);

//array.push(20);
//array.push(30);
//array.push(40);

for (let i = 0; i < 10; i++) {
    array[0](i + 1);
    
}