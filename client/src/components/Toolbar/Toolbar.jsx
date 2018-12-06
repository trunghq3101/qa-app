import React from 'react'
import Logo from '../UI/Logo/Logo'
import classes from './Toolbar.module.css'
import ContentContainer from '../UI/ContentContainer/ContentContainer';
import withToggle from '../../hoc/withToggle/withToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Button from '../UI/Button/Button';
import QuestionForm from '../../containers/QuestionContainers/QuestionForm/QuestionForm'

const AskButton = (props) => {
    
    return (
        <React.Fragment>
            <Button btnType="Super DesktopOnly" {...props}>Ask a question</Button>
            <Button btnType="Plain MobileOnly" {...props}>
                <FontAwesomeIcon icon={faPlusSquare}/>  Add
            </Button>
        </React.Fragment>
    )
}
    
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
