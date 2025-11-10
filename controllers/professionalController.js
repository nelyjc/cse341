// cse341/controllers/professionalController.js//
const getData = (req, res) => {
  res.json({
    professionalName: "Nely Crespin",
    base64Image: "iVBORw0KGgoAAAANSUhEUgAA...", // base64 only
    nameLink: {
      firstName: "Nely",
      url: "https://nelycrespin.dev"
    },
    primaryDescription: "Full Stack Developer & Designer",
    workDescription1:
      "I build modern web applications using React, Node, and MongoDB.",
    workDescription2:
      "My focus is creating user-friendly interfaces and efficient backends.",
    linkTitleText: "Connect with me:",
    linkedInLink: {
      text: "LinkedIn",
      link: "https://linkedin.com/in/nelycrespin"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com/nelycrespin"
    }
  });
};

module.exports = { getData };
