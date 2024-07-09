import {useContext} from "react";
import DataContext from "../context/dataContext.jsx";


const Result =() => {
const {showResult} =useContext(DataContext)




    return (

        <section className='bg-dark text-white' style={{display: `${showResult ? 'block' : 'none'}`}}>
            <div className='container'>

                <div className='row vh-100 align-items-center justify-content-center  '>
                    <div className='col-lg-6'>

                        <div className='text-light text-center p-5 rounded ' {`here bg-succsses or bg-danger`} >

                            <h1 className='mb-2 fw-bold'>
                            {/*here show message  'awsome' 'oops!'*/}
                            </h1>
                            <h3 className='mb-3 fw-bold '>
                            {/*    here show your score  */}

                            </h3>
                            <button className='btn py-2 px-4 btn-light fw-bold d-inline '>Start over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}



export default Result