console.log(1);
setTimeout(() => {
  console.log(2)
  process.nextTick(() => {
    console.log(3);
  });
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => {
    console.log(5);
  });
});
new Promise((resolve) => {
  console.log(7);
  resolve();
}).then(() => {
  console.log(8);
});
process.nextTick(() => {
  console.log(6);
});
setTimeout(() => {
  console.log(9);
  process.nextTick(() => {
    console.log(10);
  });
  new Promise((resolve) => {
    console.log(11);
    resolve();
  }).then(() => {
    console.log(12);
  });
});

setImmediate(() => {
  console.log(1)
  new Promise((resolve) => {
    resolve()
  }).then(() => {
    console.log(2)
  })
  process.nextTick(() => {
    console.log(3)
  })
})
setTimeout (() => {
  console.log(4)
  process.nextTick(() => {
    console.log(5)
  })
  new Promise((resolve) => {
    resolve()
  }).then(() => {
    console.log(6)
  })
}) 
// http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html
// node循环与浏览器循环不一致