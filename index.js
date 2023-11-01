const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const questions = require('./lib/questions');
const {Circle, Square, Triangle} = require('./lib/shapes');

class Svg {
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }
    render(width, height){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color, x, y){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render();
    }
}

async function init() {
    console.log('Starting logo generator...');
    var svgString = '';
    var SVGfile = 'logo.svg';

    const answers = await inquirer.prompt(questions);

        var userText = '';
        if (answers.text.length > 0 && answers.text.length <= 3) {
            userText = answers.text;
        } else {
            console.log('Whoops! Too many characters! Make sure you type 3 or LESS!');
            return;
        }
        
    //Need to fix error here between the text and text-color input from the shapes.js// 
    const Fontcolor = answers.colorText;
    const Shapecolor = answers.shape;
    const Shapetype = answers.image;
        
        let Selectshape;
        if (Shapetype === "Square") {
            Selectshape = new Square();
        }
        else if (Shapetype === "Circle") {
            Selectshape = new Circle();
        }
        else if (Shapetype === "Triangle") {
            Selectshape = new Triangle();
        }
        Selectshape.setColor(Shapecolor);

        var svg = new Svg();
        svg.setTextElement(userText, Fontcolor);
        svg.setShapeElement(Selectshape);
        svgString = svg.render();

        console.log('Creating logo file...');
        writeToFile(SVGfile, svgString);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf-8', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Hooray! Your SVG Logo has been generated!');
    });
}
init();