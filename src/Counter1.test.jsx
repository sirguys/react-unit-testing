//Unit Test by jasmine syntax
//test logic ของ code function
//how to install: npm install --save-dev enzyme react-addons-test-utils

function add(x, y) {
  return x + y;
}

describe('Counter', () => {
  it('should be 2 if 1 add 1', () => {

    //arrange

    //act
    let result = add(1, 1);

    //assert
    expect(result).toEqual(2);  //result == 2
  });
});

//Run Test: npm test
