function isPalindrome(s: string): boolean {
    const 원래문자열 = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const 뒤집어진거 = 원래문자열.split('').reverse().join('');
    
    return 원래문자열 === 뒤집어진거;
};