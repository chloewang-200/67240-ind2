const blogPostsData = [
    {
        image: "posts/components/mazeCity/imgs/mazeCity.png",
        title: "Utopian Maze Generator with A* Pathfinding Algorithm",
        date: "2023-10-19",
        intro: "Maze city is a maze generator that uses the A* pathfinding algorithm to generate a maze with a start and end point.",
        link: "posts/components/mazeCity/index.html"
    },
    {
        image: "posts/components/pattern/imgs/tree1.png",
        title: "Shape Grammar and Generative Pattern",
        date: "2023-10-18",
        intro: "Pattern Finding",
        link: "posts/components/pattern/index.html"
    },
    {
        image: "posts/components/floorPlan/imgs/floor.gif",
        title: "AI Automation of Floor Plan Generation ",
        date: "2023-10-17",
        intro: "This is the introduction to Blog Title 3.",
        link: "posts/components/floorPlan/index.html"
    },
    {
        image: "posts/components/cellColoring/imgs/cell1.png",
        title: "Reimagining Singel-Cell Coloring Through Machine Learning",
        date: "2023-10-17",
        intro: "This is the introduction to Blog Title 3.",
        link: "posts/components/cellColoring/index.html"
    },
    {
        image: "posts/components/treeGeneration/imgs/tree1.png",
        title: "Tree Structure Generation with L-Systems",
        date: "2023-2-17",
        intro: "This is the introduction to Blog Title 3.",
        link: "posts/components/treeGeneration/index.html"
    },
    {
        image: "posts/components/childrenPainting/imgs/image16.gif",
        title: "Machine Learning in Recreation of Naive Art",
        date: "2023-10-17",
        intro: "This is the introduction to Blog Title 3.",
        link: "posts/components/childrenPainting/index.html"
    },
    {
        image: "images/img14.PNG",
        title: "Digital Fabrication and Fashion: Reimagining material with Laser Cutting",
        date: "2023-05-25",
        intro: "This is the introduction to Blog Title 3.",
        link: "link-to-blog3.html"
    },
    {
        image: "posts/components/cybernetic/imgs/img8.png",
        title: "Cybernetics: Does Machine Breath?",
        date: "2023-06-25",
        intro: "This is the introduction to Blog Title 3.",
        link: "posts/components/cybernetic/index.html"
    }
    
];

blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));