import { MyComponent, FuncTextInput, CustomeTextput, AutoFocusTextInput } from "./1BasicRef"

import NameForm from "./2UncontrolledComp"
import FileInput from "./3FileInput"
import Nav from "./4InversePattern"

let App = <MyComponent />

App = <FuncTextInput />
App = <CustomeTextput />

App = <AutoFocusTextInput />

App = <NameForm />
App = <FileInput />

//4 受控组件设计模式
App = <Nav />

export default App