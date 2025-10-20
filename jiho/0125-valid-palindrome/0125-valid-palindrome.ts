function isPalindrome(s: string): boolean {
    const filteredString = s.trim().toLowerCase().split('').filter((char) => char.search(/[a-z0-9]/) !== -1).join('')
    const len = filteredString.length
    let right = len - 1

    for(let i = 0; i < len / 2; i++ ){
        if(filteredString[i] !== filteredString[right]) return false

        right --
    }

    return true
};