//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const touchdown = team =>{
        if(team === "home"){
            setHomeScore(homeScore + 7);
        }else if(team === "away"){
            setAwayScore(awayScore + 7);
        }
    };
    function fieldGoal(team) {//todo: is there a reason to use the method signature like in my touchdown method over a function signature like this one?
        if(team === "home"){
            setHomeScore(homeScore + 3);
        }else if(team === "away"){
            setAwayScore(awayScore + 3);
        }
    }

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <h2 className="home__name">Lions</h2>

                        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}


                        <div className="home__score">{homeScore}</div>
                    </div>
                    <div className="timer">00:03</div>
                    <div className="away">
                        <h2 className="away__name">Tigers</h2>
                        <div className="away__score">{awayScore}</div>
                    </div>
                </div>
                <BottomRow/>
            </section>
            <section className="buttons">
                <div className="homeButtons">
                    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                    <button className="homeButtons__touchdown" onClick={()=>touchdown("home")}>Home Touchdown</button>
                    <button className="homeButtons__fieldGoal" onClick={()=>fieldGoal("home")}>Home Field Goal</button>
                </div>
                <div className="awayButtons">
                    <button className="awayButtons__touchdown" onClick={()=>touchdown("away")}>Away Touchdown</button>
                    <button className="awayButtons__fieldGoal" onClick={()=>fieldGoal("away")}>Away Field Goal</button>
                </div>
            </section>
        </div>
    );
}

export default App;
