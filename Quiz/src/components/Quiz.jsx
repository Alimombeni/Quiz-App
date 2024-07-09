import {useContext} from "react";
import DataContext from "../context/dataContext.jsx";
import button from "bootstrap/js/src/button.js";


const Quiz = ()=> {

    const {showQuiz , question , questionIndex,quiz , correctAnswer ,checkAnswer ,selectAnswer ,next ,showTheResult} = useContext(DataContext)


    return(
        <section className='bg-dark text-white' style={{display: `${showQuiz ? 'block' : 'none'}` }} >
            <div className='container'>
                {/*display flex*/}
                <div className='row vh-100 align-items-center justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='card p-4' style={{ background: '#3d3d3d', borderColor: '#646464' }}>
                            <div className='d-flex justify-content-between gap-md-3'>
                                <h5 className='mb-2 fst-normal lh-base'>{question?.question}</h5>
                                <h5 style={{color: '#60d600' ,width:'100px' , textAlign:'right'}}>{quiz.indexOf(questionIndex) +1 } / {quiz?.length}</h5>
                            </div>
                            <div>
                                {question?.options?.map(( item , index)=>
                                    <button key={index}
                                            onClick={(e)=>checkAnswer(e , item)}
                                            className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark
                                             ${correctAnswer === item && 'bg-success'} `}>

                                        {item}
                                    </button>


                                )

                                }
                            </div>

                            {(questionIndex + 1 ) !== quiz.length
                                ?
                                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={next} disabled={!selectAnswer}>next</button>
                              :
                                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showTheResult} disabled={!selectAnswer} >show result</button>
                        }
                    </div>
                </div>
            </div>
        </div>
</section>
)


}

export default Quiz