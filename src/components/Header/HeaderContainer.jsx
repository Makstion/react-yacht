import React from "react";
import Header from "./Header";
import Preloader from "../common/Preloader/Preloader";
import { connect } from "react-redux";
import {changeTheme} from "../../redux/settings/settingReducer";



const HeaderContainer =(props) => {
    return (
      <>
        {props.isFetching ? <Preloader /> : null}
        <Header
            settings={props.settings}
            changeTheme={props.changeTheme}
        />
      </>
    );
};

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStateToProps, {
  changeTheme
})(HeaderContainer);
