import React, { PureComponent } from 'react'
import classes from './Question.module.css'
import PropTypes from 'prop-types'
import QuestionCardView from '../../containers/QuestionContainers/QuestionCardView/QuestionCardView';

export default class QuestionList extends PureComponent {

    static propTypes = {
        questions: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        return (
            <div className={`${classes.QuestionList}`}>
                {this.props.questions.map(item => (
                    <QuestionCardView key={item._id} id={item._id}/>
                ))}
            </div>
        )
    }
}
