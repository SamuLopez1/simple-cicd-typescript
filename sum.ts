/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Returns the subtraction of two numbers.
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Returns the multiplication of two numbers.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Returns the division of two numbers.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Expose to window so the HTML script can call it
(window as unknown as { sum: typeof sum }).sum = sum;
(window as unknown as { subtract: typeof subtract }).subtract = subtract;
(window as unknown as { multiply: typeof multiply }).multiply = multiply;
(window as unknown as { divide: typeof divide }).divide = divide;
