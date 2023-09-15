import React from 'react'
import './Submit.scss'
import '../../component/domain_card/Card.scss'

function Submit({showSubmit}) {
    return (
        <div class="submit-quiz">
        <div class="position">
            <div class="square">
                <div class="square-inn">
                <div className='square-header'>
                    <h1>Congoo!! Quiz completed</h1>
                    <h2>Kindly submit the quiz</h2>
                    </div>
                <div className="btn-box">
                    <button className='btn-1' onClick={showSubmit}>Submit Quiz
                        <span className="first"></span>
                        <span className="second"></span>
                        <span className="third"></span>
                        <span className="fourth"></span>
                    </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Submit;