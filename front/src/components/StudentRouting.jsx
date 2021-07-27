import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ListStudents from './ListStudents';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
const StudentRouting = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ListStudents} />
                <Route  path='/addstudent' component={AddStudent} />
                <Route  path='/editstudent/:id' component={EditStudent} />

            </Switch>
        </div>
    )
}

export default StudentRouting
