function removeDuplicates(nums: (number | string)[]): number {
    // 2. -100부터 100까지 있는 check 배열을 추가해서, 각 숫자당 몇 개씩 있는지 체크한다.
    const check: number[] = new Array(201).fill(0);
    
    // 1. 배열을 순회하면서 각 숫자의 개수를 체크
    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] === 'number') {
            const num = nums[i] as number;
            check[num + 100]++; // -100을 0 인덱스로 매핑
        }
    }
    
    let writeIndex = 0;
    
    // 3. check배열에서 0보다 큰 수의 index를 nums 배열에서 nums[0]부터 추가한다
    for (let i = 0; i < check.length; i++) {
        if (check[i] > 0) {
            const originalNum = i - 100; // 인덱스를 원래 숫자로 변환
            nums[writeIndex] = originalNum;
            writeIndex++;
        }
    }
    
    // 4. nums배열의 그 다음 칸부터는 '_'로 채운다.
    for (let i = writeIndex; i < nums.length; i++) {
        nums[i] = '_';
    }
    
    // 5. 유니크한 값들의 개수를 return한다.
    return writeIndex;
}

/** 요구사항
    1. 중복되는 값을 모두 제거
    2. 배열의 크기는 유지
    3. 남은 값은 앞에서부터 정렬
    4. 빈 칸은 '_'로 채울 것
 */

/** 시간 복잡도 생각해보기
    1. 제약조건 10^4 = 10000 -> 시간 복잡도 널널
 */

/** 풀이
1. 이중 for문을 돌린다
2. -100부터 100까지 있는 check 배열을 추가해서, 각 숫자당 몇 개씩 있는지 체크한다.
3. check배열에서 0보다 큰 수의 index를 nums 배열에서 nums[0]부터 추가한다
4. check배열의 값을 모두 nums배열로 기록하면, nums배열의 그 다음 칸부터는 '_'로 채운다.
5. nums.length()를 return한다.
 */