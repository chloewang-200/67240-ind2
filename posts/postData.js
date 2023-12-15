const blogPostsData = [
    {
        image: "posts/components/mazeCity/imgs/mazeCity.png",
        title: "Utopian Maze Generator with Pathfinding Algorithms",
        date: "2023-10-19",
        intro: "Generating and navigating 3D mazes uses pathfinding algorithms.",
        link: "posts/components/mazeCity/index.html"
    },
    {
        image: "posts/components/pattern/imgs/tree1.png",
        title: "Shape Grammar and Generative Pattern",
        date: "2023-10-18",
        intro: "An automatic pattern generator using Shape Grammar (a system of rewriting shape rules).",
        link: "posts/components/pattern/index.html"
    },
    {
        image: "posts/components/floorPlan/imgs/floor.gif",
        title: "A Reduction to the Floor Plan Generation Problem",
        date: "2022-05-17",
        intro: "An exploration of reducing floor plan generation problem to box stacking problem.",
        link: "posts/components/floorPlan/index.html"
    },
    {
        image: "posts/components/cellColoring/imgs/cell1.png",
        title: "Reimagining Singel-Cell Coloring Through Machine Learning",
        date: "2023-10-17",
        intro: "This project studies how machine learning algorithms can be used to color single-cell images.",
        link: "posts/components/cellColoring/index.html"
    },
    {
        image: "posts/components/treeGeneration/imgs/tree1.png",
        title: "Tree Structure Generation with L-Systems",
        date: "2022-12-17",
        intro: "L-Systems are a mathematical formalism for modeling the growth of plants. This project explores how to generate tree structures using L-Systems.",
        link: "posts/components/treeGeneration/index.html"
    },
    {
        image: "posts/components/childrenPainting/imgs/image16.gif",
        title: "Machine Learning in Recreation of Naive Art",
        date: "2023-10-17",
        intro: "How might we leverage machine learning to craft images that are “incomplete”, “childish”, and “naive”, aiming to stir the very emotions we seek?",
        link: "posts/components/childrenPainting/index.html"
    },
    {
        image: "images/img14.PNG",
        title: "Digital Fabrication and Fashion: Reimagining material with Laser Cutting",
        date: "2022-04-25",
        intro: "Designing at Fashion show: Lunar Gala Aunnual Runway at CMU",
        link: "posts/components/lunarGala/index.html"
    },
    {
        image: "posts/components/cybernetic/imgs/img8.png",
        title: "Cybernetics and Programmable Air: Does Machine Breath?",
        date: "2023-06-25",
        intro: "This project takes a look at the topics of cybernetics, fluid spaces and programmable air.",
        link: "posts/components/cybernetic/index.html"
    },
    {
        image: "posts/components/music/imgs/warriors.png",
        title: "Computer Music: Mogolian Warriors",
        date: "2023-03-25",
        intro: "I explored music composition using Nyquist (a programming language for sound synthesis and music composition). ",
        link: "posts/components/music/index.html"
    },
    {
        image: "posts/components/robotics/imgs/cover.png",
        title: "Robotics in the Making : Facade of the Future",
        date: "2023-06-29",
        intro: "An exploration of using robotics to create a Ceramic facade system with clay tiles and wooden structure",
        link: "./posts/components/robotics/index.html"
    }
    
];

blogPostsData.sort((a, b) => new Date(b.date) - new Date(a.date));