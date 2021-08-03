// Constants
import { three } from './constants/fake-constant-a'
import { four } from './constants/fake-constant-b'

// Utils
import { multiplyByThree } from './utils/fake-utils-by-three'
import { multiplyByTwo } from './utils/fake-utils-by-two'

// Components
import { COMPONENT } from './components/fake-component'

console.log('Hello World!')

multiplyByTwo(three)
multiplyByThree(four)

console.log('COMPONENT', COMPONENT)
