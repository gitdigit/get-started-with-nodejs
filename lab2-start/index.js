import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;


let posts = [
    {
      id: 1,
      title: "5 Tips for Perfect Pasta Every Time",
      content:
        "Pasta is a beloved staple, but there are a few tricks to making it just right. From using enough salt in the water to not overcooking it, these tips will ensure that every pasta dish comes out perfectly. Follow along to learn how to elevate your pasta dishes to restaurant quality.",
      author: "Julia Rossi",
      date: "2023-09-01T12:00:00Z",
    },
    {
      id: 2,
      title: "The Art of Baking: Mastering Bread at Home",
      content:
        "Baking bread at home is a rewarding experience. From choosing the right flour to getting the perfect rise, there's a method to the magic. This guide will walk you through the essentials of bread baking and help you understand the science behind each step.",
      author: "Paul Kingston",
      date: "2023-09-15T08:30:00Z",
    },
    {
      id: 3,
      title: "Spice it Up: A Guide to Essential Spices for Home Cooking",
      content:
        "Spices are the soul of a dish. Learn about essential spices that will enhance your cooking, from cumin and coriander to turmeric and paprika. Discover how to balance flavors and bring depth to your meals using spices you may already have in your kitchen.",
      author: "Maya Patel",
      date: "2023-10-01T10:00:00Z",
    },
];

let lastId = 3;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.get("/posts", (req,res) =>{
    console.log(posts);
    res.json(posts);
});


app.get("/posts/:id", (req, res)=>{
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if(!post){
        return res.status(404).json({message: "I don't have that"});
    }
    else{
        res.json(post);
    }
});


app.post("/posts", (req,res)=>{
    const newId = lastId+1; 
    const post ={
        id:newId, 
        title: req.body.title,
        content: req.body.content, 
        author: req.body.author,
        date: new Date()
    };
    lastId = newId;
    posts.push(post);
    res.status(201).json(post);

});


app.patch("/posts/:id", (req, res)=>{
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if(!post){
        return res.status(404).json({message: "I don't have that"});
    }
    if(req.body.title){
        post.title = req.body.title;
    }
    if(req.body.content){
        post.content = req.body.content;
    }
    if(req.body.author){
        post.author = req.body.author;
    }
    else{
        res.json(post);
    }
});


app.delete("/posts/:id", (req, res) => {
    const index = posts.findIndex((p) => p.id === parseInt(req.params.id));
    if (index === -1){
        return res.status(404).json({ message: "Post not found" });
    }
    else{
        posts.splice(index, 1);
        res.json({ message: "Post deleted" });
    }
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});


