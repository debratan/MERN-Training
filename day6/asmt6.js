// 1. E-commerce Order Processing
// Scenario: You're building an e-commerce platform, and you need to process a list of orders to generate a report.
// Task:
// Write a function processOrders that accepts an array of orders. Each order is an object with properties: id, amount, and status (which can be 'pending', 'shipped', or 'delivered').
// Use map to create an array of order ids.
// Use filter to create an array of orders that have been delivered.
// Use reduce to calculate the total amount of all delivered orders.
// Combine these higher-order functions to generate a report object containing the list of order ids, delivered orders, and the total delivered amount.

function processOrder(orders) {
  const orderid = orders.map((order) => order.id);
  const deliveredorders = orders.filter(
    (order) => order.status === "delivered"
  );
  const totalamount = deliveredorders.reduce(
    (total, order) => total + order.amount,
    0
  );

  const report = {
    orderid: orderid,
    deliveredorders: deliveredorders,
    totalamount: totalamount,
  };
  return report;
}

const orders = [
  { id: 1, amount: 100, status: "pending" },
  { id: 2, amount: 200, status: "shipped" },
  { id: 3, amount: 300, status: "delivered" },
  { id: 4, amount: 400, status: "delivered" },
  { id: 5, amount: 500, status: "delivered" },
];
const report = processOrder(orders);
console.log(report);

// OUTPUT:
// {
//     orderid: [ 1, 2, 3, 4, 5 ],
//     deliveredorders: [
//       { id: 3, amount: 300, status: 'delivered' },
//       { id: 4, amount: 400, status: 'delivered' },
//       { id: 5, amount: 500, status: 'delivered' }
//     ],
//     totalamount: 1200
//   }

//2. User Data Analysis
// Scenario: You need to analyze user data for a social media platform.
// Task:
// Write a function analyzeUsers that accepts an array of users. Each user is an object with properties: name, age, and posts (which is an array of post objects, each having title and likes).
// Use map to create an array of user names.
// Use filter to find users who have at least one post with more than 100 likes.
// Use reduce to calculate the average age of these active users.
// Combine these higher-order functions to generate a summary report containing the list of user names, active users, and the average age of active users.

function analyzeUsers(users) {
  const names = users.map((user) => user.name);
  const activeusers = users.filter((user) =>
    user.posts.some((post) => post.likes > 100)
  );
  const totalage = activeusers.reduce((acc, user) => acc + user.age, 0);
  const avgage = activeusers.length > 0 ? totalage / activeusers.length : 0;
  const report = { names, activeusers, avgage };
  return report;
}
const users = [
  {
    name: "Alice",
    age: 25,
    posts: [
      { title: "Post 1", likes: 50 },
      { title: "Post 2", likes: 120 },
    ],
  },
  {
    name: "Bob",
    age: 30,
    posts: [
      { title: "Post 3", likes: 200 },
      { title: "Post 4", likes: 80 },
    ],
  },
  {
    name: "Charlie",
    age: 35,
    posts: [
      { title: "Post 5", likes: 30 },
      { title: "Post 6", likes: 60 },
    ],
  },
  {
    name: "Diana",
    age: 40,
    posts: [
      { title: "Post 7", likes: 150 },
      { title: "Post 8", likes: 170 },
    ],
  },
];
const repost = analyzeUsers(users);
console.log(repost);

// OUTPUT:
// {
//     names: [ 'Alice', 'Bob', 'Charlie', 'Diana' ],
//     activeusers: [
//       { name: 'Alice', age: 25, posts: [Array] },
//       { name: 'Bob', age: 30, posts: [Array] },
//       { name: 'Diana', age: 40, posts: [Array] }
//     ],
//     avgage: 31.666666666666668
//   }

// 3. Real-Time Chat Application
// Scenario: You're developing a real-time chat application and need to manage messages.
// Task:
// Write a function manageMessages that accepts an array of messages. Each message is an object with properties: content and sender.
// Use map to create an array of message contents.
// Use filter to find messages sent by a specific user (e.g., 'Alice').
// Use reduce to count the total number of messages.
// Combine these higher-order functions to generate a chat summary object containing the list of message contents, messages by a specific user, and the total number of messages.

function manageMessage(messages, specuser) {
  const messagecontent = messages.map((message) => message.content);
  const messagebyuser = messages.filter(
    (message) => message.sender == specuser
  );
  const totalmessage = messages.reduce((count) => count + 1, 0);
  const chatsummary = { messagecontent, messagebyuser, totalmessage };
  return chatsummary;
}
const messages = [
  { content: "Hello!", sender: "Alice" },
  { content: "Hi there!", sender: "Bob" },
  { content: "How are you?", sender: "Alice" },
];
const specuser = "Alice";
const summary = manageMessage(messages, specuser);
console.log(summary);

// OUTPUT:
// {
//     messagecontent: [ 'Hello!', 'Hi there!', 'How are you?' ],
//     messagebyuser: [
//       { content: 'Hello!', sender: 'Alice' },
//       { content: 'How are you?', sender: 'Alice' }
//     ],
//     totalmessage: 3
//   }

// 4. Dynamic Form Validation and Submission
// Scenario: You are developing a web application where users can register by filling out a form. The form contains fields for username, email, password, and confirm password. You need to validate the form dynamically and submit the data only if all fields are valid.
// Task:
// Create an HTML form with fields for username, email, password, and confirm password.
// Write JavaScript code to validate the form dynamically:
// The username must be at least 5 characters long.
// The email must be in a valid email format.
// The password must be at least 8 characters long.
// The confirm password must match the password.
// Display error messages below each field if the validation fails.
// Prevent form submission and show an alert with the validation errors if any field is invalid.
// Display the first name and email in the alert if values are valid

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("register").addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("usernameerror").textContent = "";
    document.getElementById("emailerror").textContent = "";
    document.getElementById("passworderror").textContent = "";
    document.getElementById("cnfpassworderror").textContent = "";

    let isvaild = true;
    let error = [];

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cnfpassword = document.getElementById("cnfpassword").value;

    if (username.length < 5) {
      isvaild = false;
      error.push("Username must be at least 5 characters long");
      document
        .getElementById("usernameerror")
        .textContent="Username must be at least 5 characters long";
    }
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email)) {
      isvaild = false;
      error.push("Email must be in a valid email format");
      document.getElementById("emailerror")
        .textContent="Email must be in a valid email format";
    }
    if (password.length < 8) {
      isvaild = false;
      error.push("Password must be at least 8 characters long");
      document
        .getElementById("passworderror")
        .textContent="Password must be at least 8 characters long";
    }
    if (password != cnfpassword) {
      isvaild = false;
      error.push("Confirm password must match the password");
      document
        .getElementById("cnfpassworderror")
        .textContent="Confirm password must match the password";
    }
    if (isvaild) {
      alert(`Registration Successful!\n\nUsername: ${username}\nEmail: ${email}`);
    } else {
      alert("Registration Fail", error.join("\n"));
    }
  });
});
