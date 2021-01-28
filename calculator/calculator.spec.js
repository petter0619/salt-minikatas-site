const assert = require('assert');
const evaluate = require('./calculator');

describe('evaluate', () => {
  it('should calculate add expression', () => {
    // Arrange
    const testData = '2+4';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, '6');
  });
  it('should calculate subtract expression', () => {
    // Arrange
    const testData = '2-4';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, '-2');
  });
  it('should calculate mutliply expression', () => {
    // Arrange
    const testData = '2*4';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, '8');
  });
  it('should calculate division expression', () => {
    // Arrange
    const testData = '2/4';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, '0.5');
  });
  it('should throw exception when operation is undefined (like division by zero)', () => {
    // Arrange
    const testData = '2/0';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, 'invalid expression');
  });
  it('should throw exception when expression is not recognized (like not a mathematical expression)', () => {
    // Arrange
    const testData = 'agrh';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, 'invalid expression');
  });
  it('should handle spaces in expression (like any of the following expressions are ok: "a+b", "a + b", "a    + b")', () => {
    // Arrange
    const testData = '2 - 4  ';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, '-2');
  });
  it('should handle negative integers e.g. "-1+6"', () => {
    // Arrange
    const testData = '-2--4';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, '2');
  });
  it('should handle floating point numbers e.g. "0.02+0.23"', () => {
    // Arrange
    const testData = '0.02+0.23';
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, '0.25');
  });
  it('should handle input other than a string', () => {
    // Arrange
    const testData = (2 + 4);
    // Act
    const result = evaluate(testData);
    // Assert
    assert.equal(result, 'invalid expression');
  });
});
