// Constants
import { a } from './constants/fake-constant-a'
import { b } from './constants/fake-constant-b'

// Utils
import { multiplyByThree } from './utils/fake-utils-by-three'
import { multiplyByTwo } from './utils/fake-utils-by-two'

// Components
import { COMPONENT } from './components/fake-component'

console.log('Hello World!')

multiplyByTwo(a)
multiplyByThree(b)

console.log('COMPONENT', COMPONENT)
