export function addNumber() {
  console.log('beforeDispatch..');
  return dispatch => {
    setTimeout(() => {
      dispatch({ type:"ADD_NUMBER"});
    }, 1000);
  };
}

export function decNumber() {
  return dispatch => {
    　//这里的区块可以执行一些异步的操作
      dispatch({ type:"DEC_NUMBER" });
  };
}


// redux-thunk 把 store.dispacth()传入只能是对象 加以改造，使其可以传入函数,完成一些异步操作
