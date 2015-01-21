/**
 * This was an assignment done for Thinkful Front-end Dev Bootcamp.
 * Concepts used: Functions, Arrays, jQuery DOM Manipulation.
 */
 $(document).ready(function () {
 	
 	// Using very basic templating instead of hardcoding these as strings
	var QUIZ_TEMPLATE_HEADER = "<h2>{!1} QUIZ</h2>",
		QUIZ_TEMPLATE_QUESTION = "<p class='q-question'>{!1}</p>",	
		QUIZ_TEMPLATE_OPTION = "<li><label><input type='radio' name='answer' value='Option {!1}'><span>{!2}</span></label></li>",
		QUIZ_TEMPLATE_LIST = "<div class='q-options'><ul>{!1}</ul></div>",
		QUIZ_ANSWER_RESULT = "<p id='answerResult'>{!1}</p>",
		QUIZ_PROGRESS = "<p class='q-number'>Question <span>1</span> of <span>{!1}</span></p>",
		QUIZ_TOTAL_SCORE = "<p class='total-score'>Your answered <span>{!1}</span> correctly out of <span>{!2}</span> questions.</p>",
		QUIZ_ACTIONS_HTML = "<div class='actions'>" +
							"<button class='submit' disabled='disabled'>Submit</button>" +
							"<button class='next' disabled='disabled'>Next Question</button></div>",
		QUIZ_COMPLETE_MSG = "<p> Congratulations! Quiz is Completed! <button class='view-results'>View Results</button>";


	/**
	 * Very basic string replacement.
	 */
	function buildHTML(template /* Optional parameters to replace */) {
		// First argument is template string and next are replace values
		var howManyToReplace = arguments.length - 1;
		var str = template;
		for (var i = 1; i <= howManyToReplace; i++) {
			str = str.replace("{!" + i + "}", arguments[i]);
		}
		return str;
	}

	// Shared local variables between functions to remember state
	var currentTrackName;
	var currentQuestionNumber;
	var totalScore;

	/**
	 * Event handler for loading each track when user choose one html/css/js
	 */
	$(".tracks a").click(function() {
		currentTrackName = $(this).data("id");

		$(".masthead").fadeOut(700, function(){
			$("body").addClass(currentTrackName.toLowerCase() + "-quiz");
			$("#content").show();
			initTrack();
		});
	});

	/**
	 * Initialize each track for the quiz when user selects the track.
	 */
	function initTrack() {
		// reset the score to zero
		totalScore = 0;

		// Initialize the quiz panel here.
		$("#quiz-panel").html(buildHTML(QUIZ_TEMPLATE_HEADER, currentTrackName))
			.append(buildHTML(QUIZ_PROGRESS, QUESTIONS[currentTrackName].length))
			.append("<div id='question-box' class='q-container'></div>")
			.append(QUIZ_ACTIONS_HTML);

		// hide the next button
		$("#quiz-panel .next").hide();

		// Show the first question when the track is loaded
		showQuestion(1);

		// add a click handler to the submit button to validate user's answer
		$("#quiz-panel .submit").click(function () {
			$(this).hide();
			validateAnswer();

			// Show the next question button
			$("#quiz-panel .next").removeAttr("disabled").fadeIn(500);

			// user reached the end of quiz
			if (currentQuestionNumber == QUESTIONS[currentTrackName].length) {
				$("#quiz-panel .next").remove();
				$("#quiz-panel .actions").append(QUIZ_COMPLETE_MSG);
				
				$("#quiz-panel .view-results").click(function () {
					// Remove everything but the quiz heading
					$("#quiz-panel").children().slice(1).remove();

					var totalQuestions = QUESTIONS[currentTrackName].length;
					var html = buildHTML(QUIZ_TOTAL_SCORE, totalScore, totalQuestions);
					$("#quiz-panel").append(html);
				});
			}
		});

		// add a click handler to the Next button to show next question
		$("#quiz-panel .next").click(function () {
			// Delete any previously shown answer result like "Right Answer!"
			$("#answerResult").remove();
			showQuestion(currentQuestionNumber + 1);
		});
	}

	/**
	 * This will display one question given the question number.
	 */
	function showQuestion(n) {
		// cache the current question number for use by other functions
		currentQuestionNumber = n;
	 	// Update the current question number indicator, ex : Question 3 of 20
	 	$(".q-number span").first().text(currentQuestionNumber);
	 	// Hide the next button until user submits the answer
		$("#quiz-panel .next").hide();

		var question = QUESTIONS[currentTrackName][n - 1];
		
		var questionHtml = buildHTML(QUIZ_TEMPLATE_QUESTION, question.title);

		var answersHtml = "";
		$.each(question.options, function (index, value) {
			// constructing the li including radio button
			answersHtml += buildHTML(QUIZ_TEMPLATE_OPTION, index + 1, value);
		});
		answersHtml = buildHTML(QUIZ_TEMPLATE_LIST, answersHtml);

		$("#question-box").html(questionHtml + answersHtml);

		$("#quiz-panel .submit").attr("disabled", "disabled").show();

 		// we should enable the submit button when radio button value changes
	 	$("input:radio[name=answer]").change(function () {
	 		$("#quiz-panel .submit").removeAttr("disabled");
	 	});
	}

	function validateAnswer() {
		var question = QUESTIONS[currentTrackName][currentQuestionNumber - 1];
		// disable all radio buttons
		$("input:radio[name=answer]").attr("disabled", "disabled");

		var correctAnswer = question.correctAnswerIndex; // number, starts from zero

		$(".q-options ul li:nth-child(" + (correctAnswer + 1) + ")").addClass("rightAnswer");

		// Get the answer given by the user
		// selectedAnswer as a string - this always starts from 1
		var selectedAnswer = $("input:radio[name=answer]:checked").val().replace("Option ", "");

		// If user gave the wrong answer then highlight his answer in red
		if (correctAnswer != (selectedAnswer - 1)) {
			// :nth-number and selectedAnswer both start at 1 as the first index item
			$(".q-options ul li:nth-child(" + selectedAnswer + ")").addClass("wrongAnswer");
			$("#quiz-panel .actions").before(buildHTML(QUIZ_ANSWER_RESULT, "Wrong Answer!"));
		} else {
			$("#quiz-panel .actions").before(buildHTML(QUIZ_ANSWER_RESULT, "Right Answer!"));
			totalScore++;
		}
	}

	/**
	 * Attach an event handler for the close button.
	 * We have to remove the current quiz and then show the list of quiz topics/tracks.
	 */
	$(".close-button").click(function () {
		$("#content").fadeOut(700, function() {
			// we just added one class to the body, so just remove all classes by default
			// we do not need to know which class we added
			$("body").removeClass();
			$("#quiz-panel").html("");
			$(".masthead").fadeIn();
		});
	});
});