function firstUniqChar(s: string): number {
    let maps = new Map();
    let arr = s.split("");
    for(let a of arr){
        if(maps.has(a)){
            maps.set(a, maps.get(a)+1);
        }else{
            maps.set(a,1);
        }
    }

    for (let ss of maps.keys()) {
        if(maps.get(ss)=== 1) {
            return arr.findIndex((el)=> el === ss);
        }
       
    }

    return -1;
};