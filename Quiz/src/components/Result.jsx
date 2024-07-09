import {useContext} from "react";
import DataContext from "../context/dataContext.jsx";


const Result =() => {
const {showTheResult ,startOver ,quiz , score ,showResult} =useContext(DataContext)




    return (

        <section className='bg-dark text-white' style={{display: `${showResult ? 'block' : 'none'}`}}>
            <div className='container'>

                <div className='row vh-100 align-items-center justify-content-center  '>
                    <div className='col-lg-6'>

                        <div className={`text-light text-center p-5 rounded ${score > (quiz.length  * 5 / 2) ?'bg-success':'bg-danger'}` } >

                            <h1 className='mb-2 fw-bold'>
                                {score > (quiz.length * 5 / 2 ) ? 'Awesome' : 'Ooops!'}
                            </h1>
                            <h3 className='mb-3 fw-bold '>Your score is {score} out of {quiz.length * 5 }


                            </h3>
                            <button className='btn py-2 px-4 btn-light fw-bold d-inline ' onClick={startOver}>Start over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}



export default Result