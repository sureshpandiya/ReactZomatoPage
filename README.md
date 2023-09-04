# Parcel
- Dev Buildh
- Local Server
- HMR - Hot Module Replacement
- File Watching Alogorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification 
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older Browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove unUsed Code
- Diffrent Dev & Prod Bundles

two types of Export / Import

# Default Export/Import
export default component
import component from "path";

# named export/import
export const component
import {component} from "path";

# React Hooks
    - useState()
    - useEffect()

2 types of Routing in web Apps
    - clientside routing
    - serverside routing

Chunking
code splitting
dynamic bundaling
lazy loading
on Demand loading
dynamix import

# Redux Toolkit
  - install @reduxjs/toolkit and react-redux
  - Build our store
  - connect our store to the app.
  - Slice(cartSlice)
  - dispatch(action)
  - selector

# Types of testing (developer)
 - Unit Testing
 - Integration Testing
 - End-to-end Testing

# Setting up Testing in our App
 - Install React Testing library
 - Install Jest
 - Install Babel dependency
 - config Babel
 - configure Parcel config file to disable default babel transpilation.
 - Jest - npx jest --init
 - Install jsdom library
 - Install @babel/preset-react - to make jsx work in test case
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom