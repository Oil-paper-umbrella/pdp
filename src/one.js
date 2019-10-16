let one ={
  a:[
    {
      "header":"1",
      "hello":"world"
    },
    {
      "hello":"world"
    }
  ]
}
one.b = one.a[0];
// delete one.a[0].hello
console.log(one)