/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // result
    // 공통된 prefix 찾기
    // string 배열에 반복문을 돌자
    // 배열을 돌 때,
    // 첫번째 배열을 샘플로 두고, 문자를 배열로 분리
    // 반복문을 돌면서 있다면 스펠링을 확장시킴
    // 공통된 것이 있다는 것은 -> 배열 중 어느 곳에라도 포함이 되어야한다.
    // 예외케이스 : 공통된 것이 없다면 ""로 리턴
    
   /*
    const sampleArr = strs[0].split("")
    
    console.log(sampleArr)
    let result = ""
    
    for (let i = 0; i < sampleArr.length ; i++){
        for (let j = 1; j < strs.length; j++){
            if (strs[j].includes(sampleArr[i])){
                
            }
        }
    }
    */
    
    if (strs.length === 0) return ""
    
    let prefix = strs[0]
    
    for (let i = 1; i < strs.length ; i++){
        while (!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1)
            console.log(prefix)
            
            if (prefix === "") return "";
        }
    }
    
    return prefix
    
};