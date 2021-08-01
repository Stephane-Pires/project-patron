// Test import one
import { CONST } from './test-import-one/test-import'

// Test import two
import { TEST } from './test-import-two/test-import-2'

console.log('Hello World!')

const a = 3
const b = 4

function multiplyByTwo(number: number) {
    return number * 2
}

multiplyByTwo(a)
multiplyByTwo(b)

console.log('CONST', CONST)
console.log('TEST', TEST)
