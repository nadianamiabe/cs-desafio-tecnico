interface ICallback {
    (vowelsQuantity: number): void
}

export function countVowels(word: string, callback: ICallback) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const vowelsQuantity = word.toLowerCase().split('').filter((letter) => {
        return vowels.includes(letter)
    }).length
    callback(vowelsQuantity)
}
