const internCodeElem = document.querySelector('.js-intern-code');
const internsSectionElem = document.querySelector('.js-interns-section');

const internNameElem = document.querySelector('.name');
const internTypeElem = document.querySelector('.type');
const internLinkElem = document.querySelector('.links');

const internDataMap = {
    aditya: {
        name: 'Aditya Agarwal',
        linkedin: 'itsaditya'
    },
    akshay: {
        name: 'Akshay Kumar',
        linkedin: 'akshay'
    },
    aaqa: {
        name: 'Aaqa Ishqtaq',
        linkedin: 'aaqa'
    },
    danish: {
        name: 'Danish',
        linkedin: 'danish'
    },
    ashish: {
        name: 'Ashish',
        linkedin: 'ashish'
    },
    srinath: {
        name: 'Srinath',
        linkedin: 'srinath'
    },
    harshith: {
        name: 'Harshith',
        linkedin: 'harshith'
    },
    virali: {
        name: 'Virali',
        linkedin: 'virali'
    },
    aditi: {
        name: 'Aditi',
        linkedin: 'aditi'
    },
    sourav: {
        name: 'Sourav',
        linkedin: 'sourav'
    },
    sangam: {
        name: 'Sangam',
        linkedin: 'sangam'
    },
    nimesh: {
        name: 'Nimesh',
        linkedin: 'Nimesh'
    }
};
function handleClick(event) {
    const elem = event.target.closest('.intern');
    const internName = elem.dataset.name;
    const internData = internDataMap[internName] || {};
    internNameElem.innerHTML = `"${internData.name}"`;
    internTypeElem.innerHTML = `"${internData.name}"`
    // linkedinUrl = 'https://linkedin.com/in/' + internData.linkedin;
    // internLinkedinElem.innerHTML = linkedinUrl;
    // internLinkedinElem.href = linkedinUrl;
    var typer = document.getElementById('typewriter');

    typewriter = setupTypewriter(typer);
    typewriter.type();

}

internsSectionElem.addEventListener('click', handleClick);



// Start npm start 

setTimeout(function(){
    document.getElementById('npm-install').style.display = 'none';
    document.getElementsByClassName('intern-detail')[0].style.display = 'block';
    document.getElementsByClassName('interns-section')[0].style.display = 'grid';
}, 13000)


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