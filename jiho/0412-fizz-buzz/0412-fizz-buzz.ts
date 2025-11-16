function fizzBuzz(n: number): string[] {
    // 3의 배수일 때 Fizz
    // 5의 배수일 때 Buzz
    // 15의 배수일때 FizzBuzz

    const nums = Array.from({length: n}, (_, i) => i + 1 )

    return nums.map((num) => {
        if(num % 15 === 0) return 'FizzBuzz'
        if(num % 3 === 0) return 'Fizz'
        if(num % 5 === 0) return 'Buzz'

        return String(num)
    })
};