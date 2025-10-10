function isAnagram(s: string, t: string): boolean {
    const aMap = new Map(); //각 문자열을 넣을 맵

    s.split("").forEach((c)=>{
        if(aMap.has(c)){
            aMap.set(c, aMap.get(c)+1);
        }else{
            aMap.set(c,1);
        }
    })

    const tArr = t.split("");

    for(let c of tArr){
        if(aMap.has(c)){
            if(aMap.get(c) === 1) {
                aMap.delete(c);
            }else{
                aMap.set(c, aMap.get(c)-1);
            }
        }else{
            //해당 알파벳이 없다면 anagram이 아님 
            return false;
        }       
    }
    
    if(aMap.size === 0 ) return true;
    return false; 
};