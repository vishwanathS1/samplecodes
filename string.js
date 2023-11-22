console.log("string methods & search");
let str1="welcome to vishwa"
let str2="my name is jhon cena"
let numb=77
let h = new String("John");
console.log(h);
console.log(h.length);
console.log(str1.charAt(6));
console.log(str1.charCodeAt(5));
console.log(str1.codePointAt(6));
console.log(str1.concat(str2));
console.log(str1.endsWith("world"));
console.log(str1.endsWith("my"))
console.log(str1.startsWith("my"))
console.log(str1.startsWith("to"))
console.log(str1.includes("my"));//method) String.includes(searchString: string, position?: number | undefined): boolean
console.log(str1.lastIndexOf("to"));
console.log(str1.indexOf("my"))//(method) String.indexOf(searchString: string, position?: number | undefined): number
console.log(str1.match("me"))//match(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null
///m/,/m/g,/m/gi
console.log(str1.matchAll("me"))
console.log(str1.localeCompare());//method) String.localeCompare(that: string): number (+1 overload
console.log(str1.normalize())//normalize(form?: string | undefined): string
console.log(str1.padEnd(29,"*"));//padEnd(maxLength: number, fillString?: string | undefined): string
console.log(str1.padStart(29,"#"));//padStart(maxLength: number, fillString?: string | undefined): string
console.log(str1.repeat(5));//repeat(count: number): string
console.log(str1.replace("world","home"));//replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string
console.log(str1.search("my"));//method) String.search(regexp: string | RegExp): number (+1 overload)
console.log(str1.slice(4,12));//lice(start?: number | undefined, end?: number | undefined): string
console.log(str1.split("+"));//split(splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]
console.log(str1.substring(3,19));//substring(start: number, end?: number | undefined): string
console.log(str1.toLocaleLowerCase());//toLocaleLowerCase(locales?: string | string[] | undefined): string
console.log(str1.toLocaleUpperCase());//toLocaleUpperCase(locales?: string | string[] | undefined): string
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.valueOf());

