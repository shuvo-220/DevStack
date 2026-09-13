DevStack

A responsive React app where users can explore technologies and build their own technology stack.

Technologies

React, JavaScript, Tailwind CSS, React Icons, React Toastify

Features
Explore technologies with category, level, rating, and description.
Add and remove technologies from your personal stack.
Responsive design with loading state and toast notifications.

#question
1.What is JSX, and why is it used in React?
JSX lets us write HTML-like code inside JavaScript to create React UI easily.

2.What is the difference between props and state?
Props are data passed from parent to child, while state is data managed inside a component.

3.What does the useState hook do, and where did you use it in this project?
useState stores changing data, and I used it to manage technologies and the user's selected stack.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after rendering, and I used it to load the JSON data when the component starts.
5.Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each list item and update the UI efficiently.

6.What is conditional rendering? Show one place you used it.
Conditional rendering shows different UI based on a condition, such as showing “No technology added yet” when the stack is empty.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
The parent passes data through props, and the child sends data back by calling a function passed through props.