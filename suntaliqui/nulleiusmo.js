let buf = '';
let outer = '<div';
let inner = 'Hello World';
let tag = 'div';

buf += outer + (inner ? `>${inner}</${tag}>` : '/>');

console.log(buf); // Outputs: <div>Hello World</div>
