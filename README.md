# MicroFrontEnds app

### Micro front end implementation using the latest template provided by : npx create-mf-app.
> Microfrontends are sections of your UI, often consisting of dozens of components, that use frameworks like React, Vue, and Angular to render their components. Each microfrontend can be managed by a different team and may be implemented using its own framework.


## Core Ideas behind Micro Frontends
1. **Be Technology Agnostic**
- Each team should be able to choose and upgrade their stack without having to coordinate with other teams. Custom Elements are a great way to hide implementation details while providing a neutral interface to others.

2. **Isolate Team Code**
- Don’t share a runtime, even if all teams use the same framework. Build independent apps that are self contained. Don’t rely on shared state or global variables.

3. **Establish Team Prefixes**
- Agree on naming conventions where isolation is not possible yet. Namespace CSS, Events, Local Storage and Cookies to avoid collisions and clarify ownership.

4. **Favor Native Browser Features over Custom APIs**
- Use Browser Events for communication instead of building a global PubSub system. If you really have to build a cross team API, try keeping it as simple as possible.

5. **Build a Resilient Site**
- Your feature should be useful, even if JavaScript failed or hasn’t executed yet. Use Universal Rendering and Progressive Enhancement to improve perceived performance.



Visit <a href="https://micro-frontends.org/">micro-frontends</a> for more information on micro-frontends.
