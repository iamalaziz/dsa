/*
REVERSE

    Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

const reverse = (str: string): string => {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
};

console.log(reverse('abc'));
