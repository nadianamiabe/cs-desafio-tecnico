import { countVowels } from "../src/main"

test("when aaAaB should pass 5 as callback parameter", () => {
    const mockCallback = jest.fn()
    countVowels('aaaaa', mockCallback)
    expect(mockCallback).toHaveBeenCalledWith(5)
})

test("when TESTANDO should pass 3 as callback parameter", () => {
    const mockCallback = jest.fn()
    countVowels('TESTANDO', mockCallback)
    expect(mockCallback).toHaveBeenCalledWith(3)
})

test("when CFCD should pass 0 as callback parameter", () => {
    const mockCallback = jest.fn()
    countVowels('CFCD', mockCallback)
    expect(mockCallback).toHaveBeenCalledWith(0)
})

test("when empty should pass 0 as callback parameter", () => {
    const mockCallback = jest.fn()
    countVowels('', mockCallback)
    expect(mockCallback).toHaveBeenCalledWith(0)
})