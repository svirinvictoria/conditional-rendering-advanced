import CompA from './CompA';
import CompC from './CompC';
import CompB from './CompB';

import './style.css';

const Condition = (props) => {

    const renderConditionally =()=>{
        if (props.type==="A") {
            return <CompA />
        } else if (props.type==="B") {
            return <CompB />
        } else {
            return <CompC />
        }
    }
   

    return <div className="condition">
        <p> Condition.js </p>
        {renderConditionally()}
        </div>;
}

export default Condition;