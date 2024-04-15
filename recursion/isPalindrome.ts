const isPalindrome = (str: string, order?: number): boolean => {
    if (str.length <= 1) return true;
    if (str[0] == str[str.length - 1]) {
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
};

console.log(isPalindrome('tacocat'));
