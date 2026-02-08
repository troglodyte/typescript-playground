import { foo } from "../hangman.js"
import { expect, test } from 'vitest'

test('foo bar', ()=>{
    expect(foo()).toBe(undefined)
})