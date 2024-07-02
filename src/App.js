import "./App.css";
import Articlelist from "./component/Articlelist";
import Eventschedule from "./component/Eventschedule";
import ProductCard from "./component/ProductCard";
import Todolist from "./component/Todolist";
import UserProfile from "./component/UserProfile";

function App() {
  const product = [
    {
      name: "Redmi k20 Pro",
      price: 25000,
      imageurl:
        "https://media.pricebook.co.id/images/product/150/83696_150_1.webp",
      description:
        "Redmi K20 Pro Specifications: ✓Qualcomm® Snapdragon™ 855m, up to 2.84GHz ✓48MP AI triple camera ✓20MP pop-up selfie camera ✓16.2cm (6.39) Horizon AMOLED",
    },
    {
      name: "Harga Xiaomi Redmi Note 13 ",
      price: 29000,
      imageurl:
        "https://media.pricebook.co.id/images/product/150/99204_150_1.webp",
      description:
        "Xiaomi Redmi Note 13 ; General. SIM1: Nano, SIM2: Nano (Hybrid). 5G Supported in India. 128 GB internal storage, expandable upto 1 TB.",
    },
  ];
  const userprofile = [
    {
      name: "Dev Mondal",
      email: "dev2000@gmail.com",
      address: {
        street: "Ballygunge",
        city: "Kolkata",
        state: "West Bengal",
        zip: 700019,
      },
    },
    {
      name: "Rahul Biswas",
      email: "rahul2000@gmail.com",
      address: {
        street: "Ghum",
        city: "Siliguri",
        state: "West Bengal",
        zip: 734001,
      },
    },
  ];
  const todos = [
    {
      title: "Learn React",
      completed: true,
    },
    {
      title: "walking",
      completed: false,
    },
    {
      title: "Reading Book",
      completed: true,
    },
    {
      title: "Watch Cricket",
      completed: false,
    },
  ];
  const article = [
    {
      title: "How to use React",
      content:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single page, mobile web apps, and mobile apps.",
      author: {
        name:"Dev Mondal",
        bio:"Dev is a software engineer with 2 years of experience"
      },
    },
    {
      title: "Programming in C",
      content:
        "C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations. By design, C provides constructs that map efficiently to typical machine instructions, and therefore it has found lasting use in applications that had formerly been coded in assembly language, including operating systems, as well as various application software for computers ranging from supercomputers to embedded systems.",
      author: {
        name:"John",
        bio:"Jane is a front-end developer"
      },
    },
  ];
  const event=[
    {
      title:"Chandrayaan-3 Mission",
      date:"2024-08-23",
      location:"ISRO Headquarters, Bengaluru",
      description:" India successfully landed the Chandrayaan-3 spacecraft on the Moon's south pole, making it the first country to achieve this feat. This mission aims to enhance lunar exploration."
    },
    {
      title:"G20 Summit 2023",
      date:"2024-09-10",
      location:"New Delhi, India",
      description:"India hosted the G20 Summit, where leaders from the world's major economies discussed global issues including climate change, economic recovery, and digital transformation."
    },
    {
      "title": "Digital India Act",
      "date": "2024-01-15",
      "location": "Nationwide",
      "description": "The government introduced the Digital India Act, aiming to strengthen cybersecurity, data protection, and promote digital literacy across the nation. This new legislation seeks to modernize India's digital infrastructure."
    }
  ]

  return (
    <div className="App">
      <div className="main">
        <div className="box1">
          <h1>Product List</h1>
          <div className="pruductlist">
            {product.map((product, i) => (
              <ProductCard
                name={product.name}
                price={product.price}
                imageurl={product.imageurl}
                description={product.description}
              />
            ))}
          </div>
        </div>
        <div className="box2">
          <h1>User Profile</h1>
          <div className="userprofile">
            {userprofile.map((user, i) => (
              <UserProfile
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))}
          </div>
        </div>
        <div className="box3">
          <h1>ToDo List</h1>
          <div className="todolist">
            <Todolist todo={todos} />
          </div>
        </div>
        <div className="box4">
            <h1>Article List</h1>
            <div className="articlelist">
              <Articlelist article={article}/>
            </div>
        </div>
        <div className="box5">
            <h1>Event List</h1>
            <div className="eventlist">
              <Eventschedule event={event}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
