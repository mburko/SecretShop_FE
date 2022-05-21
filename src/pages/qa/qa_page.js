import React from 'react'
import '../../styles/qa_page.css';
import LS from '../../Components/List';
import Block_qa from '../../Components/Question_Answer';
import H1 from '../../Components/h1'

function qa_page() {
    return (
        <div className='main'>
            <div className='info1'>
                <div className='info-list'>
                <H1></H1>
                <LS></LS>
                </div>

                <div className='block'>
                    <Block_qa></Block_qa>
                    <Block_qa></Block_qa>
                    <Block_qa></Block_qa>
                </div>
            </div>
        </div>
    )
}

export default qa_page
