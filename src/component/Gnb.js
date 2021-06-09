import React from "react";
import {Link} from "react-router-dom";

const days = [
    { eng:'mon', kor:'월요일'},
    { eng:'tue', kor:'화요일'},
    { eng:'wed', kor:'수요일'}
];

const Gnb = (props) => (
    <div className="gnb">
        { days.map((day, index) => (
           <li>
               <Link to={`/?day=${day.eng}`} className={ props.day === day.eng ? 'tab_day on' : 'tab_day' }>{day.kor}</Link>
           </li>
        )) }
    </div>
)

export default Gnb;