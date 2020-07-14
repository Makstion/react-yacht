import React, {useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAllWinners, writeWinner} from "../../redux/winnersReducer";
// import {AxiosInstance as axios} from "axios";
import axios from "axios";
import './winners.scss';
import Prealoder from "../common/Preloader/Preloader";

const Winners = () => {
    const [state, setState] = useState({});
    const [preloader, setPreloader] = useState(false);

     const onShowWinners = async () => {
            setPreloader(true);
            let response =  await axios.get('https://yacht-react-game.firebaseio.com/winners.json');
            setState(response.data);
            setPreloader(false);
     };

       return (<div className="page">
            <h2 className="page-title">Winners</h2>
            <button
                onClick={() => onShowWinners()}
                className="btn btn-main-action"
            >
              show winners
            </button>
               {preloader && <Prealoder />}
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

        );
};

const mapStateToProps = (state) => {
    return {
        winners: state.winners,
        isLoading: state.settings.isLoading
    };
};

export default compose(
    connect(mapStateToProps, {
    getAllWinners,
        writeWinner
    }),
)(Winners);

