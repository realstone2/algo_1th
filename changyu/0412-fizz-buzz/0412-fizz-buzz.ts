function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    let cur = "";

    if (i % 3 === 0) cur += "Fizz";
    if (i % 5 === 0) cur += "Buzz";

    result.push(cur || i.toString());
  }

  return result;
}
