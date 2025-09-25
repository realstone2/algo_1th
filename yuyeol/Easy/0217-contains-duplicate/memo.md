### 이전 코드: 비효율적인 루프와 `delete()` 방법

```javascript
var containsDuplicate = function (nums) {
  const numsSet = new Set(nums);
  for (i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
      numsSet.delete(nums[i]);
    } else return true;
  }
  return false;
};
```

이 방법은 먼저 Set을 생성하기 위해 배열을 한 번 순회(O(N))합니다. 그 후 다시 for 루프를 돌며 has()와 delete() 연산을 수행합니다. 이는 불필요한 연산이 많고 코드의 논리적 흐름이 복잡해 $O(N)$보다 훨씬 비효율적입니다.

### 현재 코드: Set의 크기 비교 방법

```javascript
var containsDuplicate = function (nums) {
  const numsSet = new Set(nums);
  return numsSet.size !== nums.length;
};
```

이 방법은 new Set(nums)를 생성하는 과정에서 배열을 단 한 번만 순회합니다. Set은 중복된 값을 자동으로 제거해주므로, 이 한 번의 순회만으로 중복 여부를 판별하는 데 필요한 모든 정보를 확보합니다. 이후 Set의 크기를 배열의 길이와 비교하는 것은 O(1) 연산입니다. 따라서 전체 시간 복잡도는 **O(N)**으로, 이 문제를 효율적으로 해결합니다.
