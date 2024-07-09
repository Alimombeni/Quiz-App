import {useState, useEffect, useContext, createContext} from "react";



const DataContext = createContext({})

export const  DataProvider = ({children}) =>{

    const [quiz, setQuiz]=useState([])
    const [question, setQuestion]=useState({})


    const [ questionIndex, setQuestionIndex ] = useState(0)

    const [correctAnswer,setCorrectAnswer] =useState('')
    const [selectAnswer,setSelectAnswer] =useState('')

    const [score, setScore] = useState(0)

    //state for show component
    const [showStart,setShowStart] = useState(true)
    const [showQuiz,setShowQuiz]= useState(false)
    const [showResult,setShowResult] = useState(false)

//get data and keep in quiz state
    useEffect(() => {
        fetch('quiz.json').then(res=>res.json()).then(data=>setQuiz(data))
    }, []);

//single question get and keep in question state

    useEffect(()=> {
        if (quiz.length > questionIndex){
            setQuestion(quiz[questionIndex])
        }
    } ,[quiz, questionIndex])

    //start show
const start = () => {
    setShowStart(false)
    setShowQuiz(true)

}



    //check answer
    const checkAnswer = (e, selected) => {
        if (!selectAnswer) {
            setCorrectAnswer(question.answer)
            setSelectAnswer(selected)
        }if(selected === question.answer){
            e.target.classList.add('bg-success')
                setScore(score + 5);
        }else{
            e.target.classList.add('bg-danger')
        }
    }




//next
    const next = () => {
        setSelectAnswer('')
        setCorrectAnswer('')

        const wrongBtn = document.querySelector('button.bg-success')
        wrongBtn?.classList.remove('bg-success')
        const rightBtn = document.querySelector('button.bg-danger')
        rightBtn?.classList.remove('bg-danger')
        setQuestionIndex(questionIndex + 1)
    }

//show result
const showTheResult = ()=> {
        setShowStart(false)
    setShowStart(false)
    setShowResult(true)
}

//start over
    const startOver = () => {
        setShowResult(false)
        setShowStart(false)
        setShowQuiz(true)

        setCorrectAnswer('')
        setSelectAnswer('')
        setScore(0)
        setQuestionIndex(0)

        const btnWrong =document.querySelector('button.bg-danger')
        btnWrong?.classList.remove('bg-danger')
        const btnRight = document.querySelector('button.bg-success')
        btnRight?.classList.remove('bg-success')
    }

//14

    return(
        <DataContext.Provider value={{
            startOver,showResult,next,showTheResult,checkAnswer,start,
            showStart,showQuiz,quiz,score,selectAnswer,correctAnswer,
            question,questionIndex

        }}>
            {children}
        </DataContext.Provider>
    )


}




export default DataContext