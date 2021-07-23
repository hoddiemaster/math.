player1_name = localStorage.getItem("player1_name");
console.log(player1_name);
player2_name = localStorage.getItem("player2_name");
player2_score = 0;
player1_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    input_box = "<br> answer : <input id='answer'>";
    check_button = "<br> <button class = 'btn btn-success' onclick ='check()'>CHECK</button>";
    question_word = "<h3>" + number1 + " x " + number2 + "</h3>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    answer = document.getElementById("input_box").value;
    if (answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn -" + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn -" + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer turn -" + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer turn -" + player1_name;
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("playerquestion").innerHTML = "Question turn -" + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("playerquestion").innerHTML = "Question turn -" + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("playeranswer").innerHTML = "Answer turn -" + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("playeranswer").innerHTML = "Answer turn -" + player1_name;
    }
}