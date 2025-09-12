<!-- Nameste React -->

<!-- parcel -->

- Local server
- Compress
- HMR - hot module replacement
- Caching
- Minified
- Bundling
- diffrent build for development and production
- Error handling
- Image optimization
- HTPPS
- Tree shaking - remove unused code

<!-- Nameste Food -->

<!-- /******
 *
 * Header
 *  Logo
 *  Navlinks
 * Body
 *  search
 *  restaurantcontainer
 *    - img
 *    - name of res, cusine, start rating
 * Footer
 *  Aboutus
 *  contactus
 *  links
 */ -->

Two types of Export/Import

- Default Export/Import

export default component;
import component from "path"

- Named Export/Import

export const component
import {component } from "path"

- when single component in a file then used a Default export/import and when multiple component in a file then used a Named export/import

- when you write default import, name can be anything after import but when write a Named import name shoule be excet match both side

Question - Can i used default export with name export
Answer - yes

<!-- React Hooks -->

- Its a normal js function which give you the utility function

- Normal JS utility function
- Two major functiion

  - useState() - superpowerful state variables in react
  - useEffect()

- whenver a state variable changes react will re-render the component

- reconciliation algorithem - React fiber - diff alg - react 16 came

- keep track of state variable - whenver state variable change - find out the diff between two virtual dom and update the UI

Q. what is virtual DOM
A. Its a object representaion of the jsx (actual DOM)

question - why react fast?
answer

- its has virtual DOM
- efficient rendering
- efficeint dom manipulation
- Is has a diff algorithem which is very efficient
- it can do efficient DOM manipulation
- if find out the diff and update the UI

useEffect(callback function, dependecy array) - useEffect(() => {}, [])

- after component render it will call the callback function
- as soon as render cycle finish useEffect will call
- if you have do something after renderin the component you have to write inside the useEffect()
- if no dependecy array => useEffect is called on every render
- if dependecy array => useEffect is call on initial render(just once)
- if deoendecy array is [btnNameReact] => called everytime btnNameReact is updated

useState(default value) - useState("")

- if you want dynamic component
- if you want something change in component then we use local state variable
- whenever state variable change, react re-render the component.
- can't called the useState() outside the component, only be called inside the component
- don't create useState() hooks inside the if/else condition, forloop, function - its does not make sense

CORS Policy

- browser blocking the call from one origin to another origin
- when origin are mismatch CORS error will come

Shimmer UI

- untill data load showing the fake page
- load the fake page untill we get the actual data.
