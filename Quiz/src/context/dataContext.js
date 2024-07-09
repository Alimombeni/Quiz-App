

import { createContext , useState ,useEffect } from "react"
import quiz from "../components/Quiz.jsx";

const DataContext= createContext({});




export default DataProvider = ({children}) => {
//  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
   //this state keep "quiz.json" data
    const [quizs, setQuizs]=useState([])
    //this state keep single question
    const [question, setQuestion] =useState({})
    //this state keep index of question
    const [questionIndex, setQuestionIndex] =useState(0)
    //this state keep right answer
    const [correctAnswer,setCorrectAnswer] = useState('')
    //this state keep celected item when user clicked
    const [selectedAnswer,setSelectedAnswer] =useState('')
    const [marks, setMarks] = useState(0)


    // Display Controlling States
    const [showStart, setShowStart] = useState(true)
    const [showQuiz,setShowQuiz] = useState(false)
    const [showResult,setShowResult] = useState(false)


    // Load JSON Data
 useEffect(()=>{
     fetch('quiz.json').then(res => res.json()).then((data)=>setQuizs(data))
 },[])

    // Set a Single Question
    useEffect(() => {
        if(quizs.length > questionIndex){
            setQuestion(quizs[questionIndex])
        }
    }, [quizs , questionIndex]);

    //start quiz
    const startQuiz =() => {
        setShowStart(false)
        setShowQuiz(true)
    }

    //check answer
    const checkAnswer = (e , selected)=> {
        //if select right answer
        if(!selectedAnswer) {
            setCorrectAnswer(question.answer);
            setSelectedAnswer(selected);

            //if selected wrong answer
            if(selected === question.answer){
                e.target.classList.add('bg-success');
                setMarks(marks + 5);
            }else{
                e.target.classList.add('bg-danger');
            }
        }
    }

    //next question
    const nextQuestion = () => {


        setCorrectAnswer('')
        setSelectedAnswer('')

        const wrongBtn = document.querySelector('button.bg-danger');
        wrongBtn?.classList.remove('bg-danger');
        const righBtn = document.querySelector('button.btn-success');
        righBtn?.classList.remove('bg-success');
        setQuestionIndex(questionIndex + 1)
    }



    //show Result

    const showTheResult = () =>{
        setShowResult(true)
        setShowStart(false)
        setShowQuiz(false)
    }

    //start over
    const startOver = ()=>{

        setShowStart(false)
        setShowQuiz(true)
        setShowResult(false)
        setCorrectAnswer('')
        setSelectedAnswer('')
        setQuestionIndex(0)
        setMarks(0)

        const wrongBtn = document.querySelector('button.btn-danger');
        wrongBtn?.classList.remove('bg-danger');

        const rightBtn = document.querySelector('button.btn-success');
        rightBtn?.classList.remove('bg-success');


    }


    return(


        <DataContext.Provider value={ {

            startQuiz,showStart,showQuiz,question,quizs,checkAnswer,correctAnswer,
            selectedAnswer,questionIndex,nextQuestion,showTheResult,showResult,marks,
            startOver

        } } >


            {children}
        </DataContext.Provider>

    )








}






















































