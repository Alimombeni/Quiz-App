import {useState, useEffect, useContext, createContext} from "react";
const DataContext = createContext({})
//----------------------ALL DATA WE USE THEM IN COMPONENTS
export const DataProvider = ({children}) => {
    const [quiz, setQuiz] = useState([])
    const [question, setQuestion] = useState({})
    const [questionIndex, setQuestionIndex] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [selectAnswer, setSelectAnswer] = useState('')
    const [score, setScore] = useState(0)
    //------------------------------STATE FOR SHOW COMPONENT
    const [showStart, setShowStart] = useState(true)
    const [showQuiz, setShowQuiz] = useState(false)
    const [showResult, setShowResult] = useState(false)
//----------------------------------GET DATA FROM JSON FILE AND KEEP IT TO QUIZ STATE
    useEffect(() => {
        fetch('quiz.json').then(res => res.json()).then(data => setQuiz(data))
    }, []);
//-------------------------------SINGLE QUESTION
    useEffect(() => {
        if (quiz.length > questionIndex) {
            setQuestion(quiz[questionIndex])
        }
    }, [quiz, questionIndex])
    //--------------------------------START QUIZ
    const start = () => {
        setShowStart(false)
        setShowQuiz(true)
    }
    //--------------------------CHECK USER ANSWER
    const checkAnswer = (e, selected) => {
        if (!selectAnswer) {
            setCorrectAnswer(question.answer)
            setSelectAnswer(selected)
        }
        if (selected === question.answer) {
            e.target.classList.add('bg-success')
            setScore(score + 5);
        } else {
            e.target.classList.add('bg-danger')
        }
    }
//-----------------------------NEXT BUTTON
    const next = () => {
        setSelectAnswer('')
        setCorrectAnswer('')
        const wrongBtn = document.querySelector('button.bg-success')
        wrongBtn?.classList.remove('bg-success')
        const rightBtn = document.querySelector('button.bg-danger')
        rightBtn?.classList.remove('bg-danger')
        setQuestionIndex(questionIndex + 1)
    }
//---------------------------SHOW RESULT
    const showTheResult = () => {
        setShowStart(false)
        setShowQuiz(false)
        setShowResult(true)
    }
//-------------------------START OVER
    const startOver = () => {
        setShowResult(false)
        setShowStart(false)
        setShowQuiz(true)
        setCorrectAnswer('')
        setSelectAnswer('')
        setScore(0)
        setQuestionIndex(0)
        const btnWrong = document.querySelector('button.bg-danger')
        btnWrong?.classList.remove('bg-danger')
        const btnRight = document.querySelector('button.bg-success')
        btnRight?.classList.remove('bg-success')
    }
    //-----------------------------PROVIDE ALL STATE
    return (
        <DataContext.Provider value={{
            startOver,  next, showTheResult, checkAnswer, start,
            showResult, showStart, showQuiz,
            quiz,question, questionIndex,
            score, selectAnswer, correctAnswer
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext