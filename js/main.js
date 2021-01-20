$(document).ready(function(){
    var questions = [{
        question: "What is the baby of a Moth called?",
        choices: ["baby", "infant", "kit", "larva"],
        correctAnswer: 3
    },
    {
        question: "What is the adult of a kid called?",
        choices: ["calf", "doe", "goat", "chicken"],
        correctAnswer: 2
    },
    {
        question: "What is the young of a Buffalo called?",
        choices: ["calf", "infant", "pup", "cow"],
        correctAnswer: 0
    },
    {
        question: "What is the baby Alligator called?",
        choices: ["kit", "gator", "hatchling", "calf"],
        correctAnswer: 2
    },
    {
        question: "What is the baby of a Goose called?",
        choices: ["gander", "gosling", "pup", "gup"],
        correctAnswer: 1
    },
    {
        question: "What is the baby of a Hamster called?",
        choices: ["pup", "chick", "billy", "infant"],
        correctAnswer: 0
    },
    {
        question: "What is the baby of a Hawk called?",
        choices: ["hawklett", "pup", "larva", "eyas"],
        correctAnswer: 3
    },
    {
        question: "What is the baby of a Whale called?",
        choices: ["whala", "cub", "grub", "pup"],
        correctAnswer: 0
    },
    {
        question: "What is the baby of a Monkey called?",
        choices: ["baby", "infant", "grub", "larva"],
        correctAnswer: 1
    },
    {
        question: "What is the baby of a Bear called?",
        choices: ["cub", "young bear", "bearlet", "grub"],
        correctAnswer: 0
    },
];

    var currentQuestion = 0;
    var correctAnswers = 0;
    var quizOver = false;

    $("#quizMessage").hide();
    $("#message").hide();

    let displayCurrentQuestion = () => {
        console.log("This is the current question")
        let question = questions[currentQuestion].question;
        let questionClass = $(".question");
        let choiceList = $(".choiceList");
        let numChoices = questions[currentQuestion].choices.length;

        //Set the questionClass to the current question
        $(questionClass).text(question);

        //Remove all current <li> elements  (if any)
        $(choiceList).find("li").remove();

        let choice;
        for (var i = 0; i < numChoices; i++){
            choice = questions[currentQuestion].choices[i];
            $('<li><input type="radio" value=' + i + ' name = "choices"/> ' + choice + '</li>').appendTo(choiceList);
        }

    }

    let resetQuiz = () => {
        currentQuestion = 0;
        correctAnswers = 0;
        hideScore();
    }

    let displayScore = () => {
        $("#result").text("You scored <b >" + correctAnswers + "</b> out of <b>" + questions.length);
        $("#message").show();
    }
    
    let hideScore = () => {
        $("#message").hide()
    }

    $("#nextButton").on("click", () => {
        $("#nextButton").text("Next Question")
        displayCurrentQuestion();
        $("#quizMessage").hide();
        if(!quizOver) {
            let val = $('input[name=choices]')      
            let value =  val.filter(':checked').val();
            console.log(value)
            if (value == undefined){
                $("#quizMessage").text("Please select an answer!").show();
            } else {
                $("#quizMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $("#nextButton").text("Play Again!");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $("#nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
})