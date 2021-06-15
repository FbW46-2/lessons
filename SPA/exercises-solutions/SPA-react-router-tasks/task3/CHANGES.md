# Changes

## Change 4

- Converted Header from functional into class-component
- Added a state-member: active 
- For each Link, added an onClick-event that calls setActive
- Added conditional styling for each Link
- Added componentDidMount-lifecycle method

## Change 3

- Converted Contact-component from functional into class-component
- added four state-members: name, email, message, messageSent
- Gave each input a name-property
- Created a method onChange that is called when input boxes/ textarea changes
- Added onClick event for button that calls send() - method
- Added validation-check inside send() - method
- Added conditional for when the message has been sent

## Change 2

- $ npm install react-router-dom
- Wrapped App component in <Router> - tags
- Added <Switch>-Tag in the main-Div
- Created two folders "components" (for router-independent components) and "views" for (router-dependent components)
- Added 12 photos, 4 for each hobby in the src/images folder
- included them in the Hobbies-component
- in the Header-component, added Router-Links

## Change 1

Converted functional React-boilerplate component into class-component.