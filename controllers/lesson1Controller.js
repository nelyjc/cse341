const helloRoute = (req,res) => {
    res.send("Hello");
};


const helloWorldRoute = (req,res) => {
    res.send("Hello World");
};

module.exports = {
    helloRoute,
    helloWorldRoute
};
