/**
 * Questions for 3 quiz tracks.
 * Ideally this should come from a server as JSON.
 */
var QUESTIONS = {
  "HTML": [
    {
      "title": "What is the correct HTML5 DOCTYPE declaration?",
      "options": [
        "&lt;!DOCTYPE html&gt;",
        "&lt;!DOCTYPE html5&gt;",
        "&lt;DOCTYPE html&gt;",
        "&lt;DOCTYPE html5&gt;"
      ],
      "correctAnswerIndex": 0
    },
    {
      "title": "What is the full form of HTML?",
      "options": [
        "Hypertext Machine Language",
        "Hypertext Memory Language",
        "High Tech Markup Language",
        "Hypertext Markup Language"
      ],
      "correctAnswerIndex": 3
    },
    {
      "title": "What is the attribute on img tag to specify the image URL?",
      "options": [
        "link",
        "rel",
        "src",
        "href"
      ],
      "correctAnswerIndex": 2
    },
    {
      "title": "Which of the following in an inline element?",
      "options": [
        "div",
        "img",
        "p",
        "li"
      ],
      "correctAnswerIndex": 1
    },
    {
      "title": "What is the tag that is used to load and external stylesheet?",
      "options": [
        "link",
        "style",
        "script",
        "css"
      ],
      "correctAnswerIndex": 0
    }
  ],
  "CSS": [
    {
      "title": "Which property is used to flow text around an image?",
      "options": [
        "display",
        "float",
        "wrap"
      ],
      "correctAnswerIndex": 1
    },
    {
      "title": "Which rule is used load one stylesheet from another?",
      "options": [
        "@load",
        "@link",
        "@import"
      ],
      "correctAnswerIndex": 2
    },
    {
      "title": "Which element attribute is used to add inline styles?",
      "options": [
        "css",
        "style",
        "styles"
      ],
      "correctAnswerIndex": 1
    },
    {
      "title": "Identify the universal selector in CSS.",
      "options": [
        "*",
        "@",
        "%"
      ],
      "correctAnswerIndex": 0
    },
    {
      "title": "Which of the following is not a valid value for 'float' property",
      "options": [
        "left",
        "right",
        "top",
        "inherit"
      ],
      "correctAnswerIndex": 2
    }
  ],
  "JS": [
    {
      "title": "var a = []; What does 'typeof a' return?",
      "options": [
        "'object'",
        "'array'",
        "Array",
        "Obect"
      ],
      "correctAnswerIndex": 0
    },
    {
      "title": "function test() {}. Is 'test instanceof Object' true or false?",
      "options": [
        "false",
        "true"
      ],
      "correctAnswerIndex": 1
    },
    {
      "title": "function test() { alert(a); var a = 10; }. What does this function show in alert when it's called?",
      "options": [
        "10",
        "undefined",
        "Function call would fail."
      ],
      "correctAnswerIndex": 1
    },
    {
      "title": "if ('false') { alert('Hi'); }. Will this code show alert or not?",
      "options": [
        "Shows the alert with Hi",
        "Does not show alert."
      ],
      "correctAnswerIndex": 0
    },
    {
      "title": "function test() {}; var test = 10;. 'What is typeof test'?",
      "options": [
        "function",
        "number"
      ],
      "correctAnswerIndex": 1
    }
  ]
};