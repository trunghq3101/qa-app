import React from 'react'
import Logo from '../UI/Logo/Logo'
import classes from './Toolbar.module.css'
import ContentContainer from '../UI/ContentContainer/ContentContainer';
import TextButton from '../UI/Button/TextButton/TextButton';
import QuestionForm from '../../containers/Question/QuestionForm/QuestionForm'
import withToggle from '../../hoc/withToggle/withToggle';

const AskButton = (props) => <TextButton btnType="Super" {...props}>Ask a question</TextButton>
    
export default (props) => {

    const QuestionFormToggle = withToggle(AskButton, QuestionForm)

    return (
        <nav className={classes.Toolbar}>
            <ContentContainer>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ flexGrow: 1 }}>
                        <span className={classes.LogoDesktop}><Logo logoType="default" /></span>
                        <span className={classes.LogoMobile}><Logo logoType="white" /></span>
                    </div>
                    <div>
                        <QuestionFormToggle />
                    </div>
                </div>

            </ContentContainer>
        </nav >
    )
}
