//TODO: STEP 1 - Import the useState hook.
import React, {useEffect, useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ButtonGroup from "./ButtonGroup";

function App() {
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [currentQuarter, setCurQuarter] = useState(1);
    const [timeLeft, setTimeLeft] = useState(900);//this is going to be a seconds rep of time left in the quarter, it'll make iteration easier
    //todo: difference between "const setTeamScore = team, score =>" and "function setTeamScore(team, score)"
    function setTeamScore(team, score){
        if(team === "home"){
            setHomeScore(homeScore + score);
        }else if(team === "away"){
            setAwayScore(awayScore + score);
        }
    }
    function incrementQuarter(){
        let newQuarter = ((currentQuarter % 4) + 1);
        setCurQuarter(newQuarter);
        console.log(currentQuarter);
    }


    useEffect(() => {
        //part of this pattern I found at:
        //https://stackoverflow.com/questions/57137094/implementing-a-countdown-timer-in-react-with-hooks
        const intervalId = setInterval(()=>{
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);//the clear interval is important to keep the time displaying properly

    }, [timeLeft]);

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <div className="home">
                        <h2 className="home__name">Lions</h2>

                        {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}


                        <div className="home__score">{homeScore}</div>
                    </div>
                    <div className="timer">{Math.floor(timeLeft / 60)}:{(timeLeft % 60) < 10 ? "0" + (timeLeft % 60) : timeLeft % 60}</div>
                    <div className="away">
                        <h2 className="away__name">Tigers</h2>
                        <div className="away__score">{awayScore}</div>
                    </div>
                </div>
                <BottomRow quarter={currentQuarter} />
            </section>
            <ButtonGroup setTeamScore={setTeamScore} incrementQuarter={incrementQuarter} />
        </div>
    );
}

export default App;
