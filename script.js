var questions = [['Dünyanın ən gözəl ölkəsi Afrikadır.','y'],['Türkiyənin paytaxtı Ankaradır.','d'],['Hollywood Hindistanda yerləşir.','y'],['Dünyada 4 qitə var.','y']];
var correctScore = document.querySelector('.correct');
var wrongScore = document.querySelector('.wrong');
var questionContent = document.querySelector('.question');
var quiz = document.querySelector('.quiz');
var startQuiz = document.querySelector('.startQuiz')
var index = 0;
var correctScoreCounter = 0;
var wrongScoreCounter = 0;
var question = questions[index][0];
questionContent.innerText = question;
window.onkeydown = function(e){
    if(e.key == 'b'){
        startQuiz.style.display = 'none'
        quiz.style.transform = 'translateY(0px)'
        window.onkeydown = function(e){
            if(e.key == 'd' || e.key == 'y'){
                if(e.key == questions[index][1]){
                    correctScoreCounter++;
                    correctScore.innerText = correctScoreCounter;
                }
                else{
                    wrongScoreCounter++;
                    wrongScore.innerText = wrongScoreCounter;
                }
                index++;
                var question = questions[index][0];
                questionContent.innerText = question;
                quiz.style.transform = 'translateX(0px)'
            }
             else{
                 alert('Doğru seçmək üçün "d", Yanlış seçmək üçün "y" hərfinə basın!');
            }
    }
    }
};




