function plusOne(digits: number[]): number[] {

    for (let i = digits.length; 0 <= i; i--){

        // digits 중 9보다 작은 숫자가 있었을 때
        if (digits[i] < 9) {
            
            // 9보다 작은 값에 +1을 더하고
            digits.splice(i, 1, digits[i]+1)

            // 뒤의 값은 "모두" 0으로 바꿔야함
            if(i < digits.length - 1) digits.fill(0, i+1) 

            return digits
        }
    }

    // digits의 원소가 모두 9일 때
    digits.fill(0).unshift(1);
    return digits
};

/** 조건
    배열에서 끝 숫자에 1 더해주기
    끝 숫자가 9이면 그 앞에 1 더해주기
 */

/** 시간복잡도
    길이 100까지면 그냥 신경안써도 될거같은데
    O^3해도 되지않나
 */

/** 구현
    배열을 받아서, 뒤에서 부터 9가 아닌 값을 찾고 그 값에 1을 더해준 다음 리턴
 */

/** 트러블슈팅
    1. shift는 변경된 배열을 반환하지만 unshift는 배열의 길이를 반환한다.(왜...?)
    2. 바보같이 index가 0인 경우까지 조회안하게했음,,
    3. 값이 9면 앞에 1을 더해주고, 뒤의 값은 "모두" 0으로 바꿔야함,,
 */