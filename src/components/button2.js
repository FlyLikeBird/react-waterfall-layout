function render(){
    var div = document.createElement('div');
    div.innerHTML = 'this is module button2.js update 5 times';
    document.body.appendChild(div);
}
console.log(module);
render();