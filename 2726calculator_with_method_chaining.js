// https://leetcode.com/problems/calculator-with-method-chaining/

class Calculator {
    constructor(value) {
        this.value = value;
    }

    add(value){
        this.value += value;
    }

    subtract(value){
        this.value -= value;
    }
 
    multiply(value) {
        this.value *= value;
    }

    divide(value) {
        if (value === 0) {
            throw Error('Division by zero is not allowed');
        } else {
            this.value /= value;
        }
    }

    power(value) {
        this.value = Math.pow(this.value, value);
    }
      
    getResult() {
        return this.value;
    }
  }