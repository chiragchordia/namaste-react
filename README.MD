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

question - why react fast?
answer

- its has virtual DOM
- Is has a diff algorithem which is very efficient
- it can do efficient DOM manipulation
- if find out the diff and update the UI
