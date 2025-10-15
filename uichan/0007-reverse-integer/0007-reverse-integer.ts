function reverse(x: number): number {
    const 음수확인 = 0 < x ? false : true
    const 답 = parseFloat(x.toString().split('').reverse().join(''));

    if (답 < -1 * 2**31 || 2**31 - 1 < 답) return 0

    return 음수확인 ? 답*-1 : 답
};

/** 조건
    뒤집기
    근데 음수 유지되어야함.
    그리고 `-2^31 <= x <= 2^31 - 1`이거 벗어나면 0 return
 */

/** 시간 복잡도
 */

/** 구현
    걍 문자열로 바꿔서 뒤집자.
 */