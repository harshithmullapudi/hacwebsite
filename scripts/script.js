const internCodeElem = document.querySelector('.js-intern-code');
const internsSectionElem = document.querySelector('.js-interns-section');

const internNameElem = document.querySelector('.name');
const internTypeElem = document.querySelector('.type');
const internLinkElem = document.querySelector('.links');
const internPhraseElem = document.querySelector('.phrase');

const internDataMap = {

    aditya: {
        "name": "Aditya Agarwal",
        "type": "SDE",
        "links": [
            "https://twitter.com/dev__adi",
            "https://adi.surge.sh"
        ],
        "phrase": "L do you know, Gods of Death loves apples"
    },
    akshay: {
        "name": "Akshay",
        "type": "SDE",
        "links": [
            "https://github.com/kakshay21",
            "https://linkedin.com/in/kakshay21"
        ],
        "phrase": "Brute-forcing my way through life."
    },
    aaqa: {
        "name": "Aaqa Ishtyaq",
        "type": "SDE",
        "links": [
            "https://github.com/aaqaishtyaq",
            "https://linkedin.com/in/aaqaishtyaq",
            "https://aaqai.me"
        ],
        "phrase": "May the FOSS be with you"
    },
    danish: {
        "name": "Danish Prakash",
        "type": "SDE",
        "links": [
            "https://github.com/danishprakash",
            "https://linkedin.com/in/danishprakash",
            "https://danishprakash.github.io"
        ],
        "phrase": "git pull --yourself-together"
    },
    ashish: {
        "name": "Ashish Jha",
        "type": "TCE",
        "links": [
            "https://github.com/marshal4world",
            "https://linkedin.com/in/marshal4world",
            "https://codeforces.com/profile/marshal4world"
        ],
        "phrase": "I turn coffee into code. Given enough coffee I could rule the world :p"
    },
    srinath: {
        "name": "Srinath",
        "type": "TCE",
        "links": [
            "https://github.com/theKnack",
            "https://linkedin.com/in/01srinath"
        ],
        "phrase": "Error: 404 Not Found"
    },
    harshith: {
        "name": "Harshith Mullapudi",
        "type": "SDE",
        "links": [
            "https://github.com/harshithmullapuci",
            "https://eventbeep.com"
        ],
        "phrase": "I build team. We build [sS]*."
    },
    virali: {
        "name": "Virali",
        "type": "TCE",
        "links": [
            "https://github.com/#",
            "https://linkedin.com/in/virali"
        ],
        "phrase": "Error: 404 Not Found"
    },
    aditi: {
        "name": "Aditi Srinivas",
        "type": "SDE",
        "links": [
            "https://github.com/aditisrinivas97",
            "https://linkedin.com/in/aditisrinivas97"
        ],
        "phrase": "Why does the Docker container fail, Bruce? So that, Kubernetes can start it again."
    },
    saurav: {
        "name": "Saurav Sachidanand",
        "type": "SDE",
        "links": [
            "https://github.com/saurvs",
            "https://linkedin.com/in/saurvs"
        ],
        "phrase": "Tangerine trees and marmalade skies and a girl with kaleidoscope eyes."
    },
    sangam: {
        "name": "Sangam Kumar",
        "type": "SDE",
        "links": [
            "https://github.com/sangamcse",
            "http://www.meetsangamcse.me"
        ],
        "phrase": "At the forefront of code excellence"
    },
    nimesh: {
        "name": "Nimeeh Jain",
        "type": "SDE",
        "links": [
            "https://www.nimeshjain.com/",
            "https://instagram.com/devnimi/"
        ],
        "phrase": "My name is Nimesh Jain and I'm not an engineer*"
    },
    progyan: {
        "name": "Progyan",
        "type": "SDE",
        "links": [
            "https://github.com/Progyan1997",
            "https://linkedin.com/in/progyan-bhattacharya"
        ],
        "phrase": "Loves to Make, Dares to Break"
    }
};
function handleClick(event) {
    const elem = event.target.closest('.intern');
    const internName = elem.dataset.name;
    const internData = internDataMap[internName] || {};
    internNameElem.innerHTML = `"${internData.name}"`;
    internTypeElem.innerHTML = `"${internData.type}"`;
    internPhraseElem.innerHTML = `<h3><span class='warning'>$</span> ${internData.phrase}</h3>`;
    internLinkElem.innerHTML = `[
        <a class="github" href="${internData.links[0]}">${internData.links[0].replace("https://github.com/", "").replace("https://twitter.com/", "")}</a>,
        <a class="linkedin" href="${internData.links[1]}">${internData.links[1].replace("https://linkedin.com/in/", "").replace("https://instagram.com/", "").replace("http://www.", "")}</a>
    ]`;
    // const gitlink = elem.closest('a.github');
    // gitlink.innerHTML = `${internData.links[0]}`;
    // gitlink.setAttribute('href', internData.links[0]);
    // linkedinUrl = 'https://linkedin.com/in/' + internData.linkedin;
    // internLinkedinElem.innerHTML = linkedinUrl;
    // internLinkedinElem.href = linkedinUrl;
    var typer = null; //document.querySelector('.typewriter');
    typewriter = setupTypewriter(typer);
    typewriter.type();

}

internsSectionElem.addEventListener('click', handleClick);


// This is typewriter function
function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = true,
        tagOpen = false,
        typeSpeed = 0.01,
        tempTypeSpeed = 0;

    var type = function() {

        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            } else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 10;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 10;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

// Start the npm install
var typer = document.getElementById('npm-install');
typewriter = setupTypewriter(typer);
typewriter.type();

// Start npm start

setTimeout(function(){
    document.getElementById('npm-install').style.display = 'none';
    document.getElementsByClassName('intern-detail')[0].style.display = 'block';
    document.getElementsByClassName('phrase')[0].style.display = 'block';
    document.querySelector('footer').style.display = 'inline-flex';
    // console.log(window.innerWidth)
    if(window.innerWidth <= 600)
    {
        document.getElementsByClassName('interns-section')[0].style.display = 'block';
    }
    else
    {
        document.getElementsByClassName('interns-section')[0].style.display = 'grid';
    }
}, 14000);
// 14000
