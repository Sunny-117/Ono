import $ from 'jquery';

var code = `
  let a = 1;
  const b = 2;
  a = a + b;
  console.log(a);
`;

$.ajax({
  url: 'http://localhost:8080/transfer',
  type: 'POST',
  data: {
    code
  },
  success (data) {
    const fn = Function(data);
    console.log(fn);
    fn();
  }
})