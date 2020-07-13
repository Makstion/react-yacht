import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAllWinners, writeWinner} from "../../redux/winnersReducer";
// import {AxiosInstance as axios} from "axios";
import axios from "axios";
import './winners.scss';

const Winners = (props) => {
    const [state, setState] = useState({});
     const onShowWinners = async () => {
            let response =  await axios.get('https://yacht-react-game.firebaseio.com/winners.json');
            setState(response.data);
     };


    return (
        <div className="page">
            <h2 className="page-title">Winners</h2>
            <button
                onClick={() => onShowWinners()}
                className="btn btn-main-action"
            >
              show winners
            </button>

            <div className="winners">
                {Object.keys(state).map((winner, index) =>
                    <div className={'winner-item'} key={index}>
                        <span className={"winner-item-name"}>{state[winner].name}</span>
                        <span
                            className={'winner-item-score'}
                        >
                               <div className={'value'}> {state[winner].score}</div>
                            </span>

                    </div>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        winners: state.winners,
    }
}

export default compose(
    connect(mapStateToProps, {
    getAllWinners,
        writeWinner
    }),
)(Winners);

