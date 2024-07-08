




const Quiz = ()=> {



    return(
        <section className='bg-dark text-white' >
            <div className='container'>
                {/*display flex*/}
                <div className='row vh-100 align-items-center justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='card p-4'>
                            <div className='d-flex justify-content-between gap-md-3'>
                                <h5 className='mb-2 fst-normal lh-base'>{
                                //     code for question in here
                                }</h5>
                                <h5 style={{color: '#60d600' ,width:'100px' , textAlign:'right'}}>hi</h5>
                            </div>
                            <div>
                                {
                                    // button for if question in right change color to green


                                    // <button
                                    //
                                    //     className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark     'bg-success'}`}
                                    //     onClick={()=>()}
                                    // >
                                    //
                                    // </button>)
                                    //
                                    //


                                }
                            </div>
                            {
                                //    2 button for next question and show result

                                // <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold'
                                //         onClick={()=>()}>Next Question</button>
                                // :
                                // <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={()=>()}>Show Result</button>
                                //


                        }
                    </div>
                </div>
            </div>
        </div>
</section>
)


}

export default Quiz