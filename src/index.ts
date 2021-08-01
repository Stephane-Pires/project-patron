// Constants
import { CONST } from './constants/fake-constant'

// Utils
import { UTILS } from './utils/fake-utils'

// Components
import { COMPONENT } from './components/fake-component'

console.log('Hello World!')

const a = 3
const b = 4

function multiplyByTwo(number: number) {
    return number * 2
}

multiplyByTwo(a)
multiplyByTwo(b)

console.log('UTILS', UTILS)
console.log('COMPONENT', COMPONENT)
console.log('CONST', CONST)
