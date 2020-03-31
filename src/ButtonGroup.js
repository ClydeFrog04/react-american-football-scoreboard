import React from "react";
import "./App.css";

const ButtonGroup = (props) => {
    const {setTeamScore, incrementQuarter} = props;
    return (
        <section className="buttons">
            <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button className="homeButtons__touchdown" onClick={()=>setTeamScore("home", 6)}>Home Touchdown</button>
                <button className="homeButtons__extraPoint" onClick={()=>setTeamScore("home", 1)}>Home Extra Point</button>
                <button className="homeButtons__twoPoint" onClick={()=>setTeamScore("home", 2)}>Home Two Point</button>
                <button className="homeButtons__fieldGoal" onClick={()=>setTeamScore("home", 3)}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown" onClick={()=>setTeamScore("away", 6)}>Away Touchdown</button>
                <button className="awayButtons__extraPoint" onClick={()=>setTeamScore("away", 1)}>Away Extra Point</button>
                <button className="awayButtons__twoPoint" onClick={()=>setTeamScore("away", 2)}>Away Two Point</button>
                <button className="awayButtons__fieldGoal" onClick={()=>setTeamScore("away", 3)}>Away Field Goal</button>
            </div>
            <div className="gameButtons">
                <button className="quarter" onClick={incrementQuarter}>Increment Quarter</button>
            </div>
        </section>
    );
};

export default ButtonGroup;
