const quiz = [
    {
        question : '�Ȃ�̃T�[�N���H',
        answers : ['�e�j�X', '�J�o�f�B', '�Z�p�^�N���[', '�����b�N'],
        correct : '�e�j�X'
    }, {
        question : '�l���́H',
        answers : ['30�l', '50�l', '100�l', '200�l'],
        correct : '200�l'
    }, {
        question : '��N�ԂŊJ�Â���鍇�h�̉񐔂́H',
        answers : ['2��', '3��', '4��', '5��'],
        correct : '5��'
    }, {
        question : '���܂肢����p�B�̏h�̖��O�́H',
        answers : ['���ؑ�', '�z�e���R�c', '�z�e�����R', '��V����'],
        correct : '��V����'
    }, {
        question : '�~���h�ōs���̂́H',
        answers : ['�e�j�X', '�X�m�{', '�쉺��', '�{�[�h�Q�[��'],
        correct : '�X�m�{'
    }

]

let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

//�I���������̐ݒ�
const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

const setupQuiz = () =>{
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//�N���b�N�����Ƃ��̐��딻��
const clickHandler = (e) => {
    if(e.target.textContent == quiz[quizIndex].correct) {
        window.alert('����!');
        score++;
    } else {
        window.alert('�s�����I');
    }
    quizIndex++;
    if(quizIndex < quizLength) {
        setupQuiz();
    } else {
        let accuracy = score / quizLength;
        window.alert('���Ȃ��̐��𐔂́A' + score + ' / ' + quizLength + '�ł��I\n' + 
        '���Ȃ��̐������́A' + accuracy * 100 + '%�ł��I');
    }
}
let hundleIndex = 0;
while(hundleIndex < buttonLength){
    $button[hundleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    })
    hundleIndex++;    
}