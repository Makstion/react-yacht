import React from "react";
import Header from "./Header";
import Preloader from "../common/Preloader/Preloader";
import { connect } from "react-redux";


class HeaderContainer extends React.Component {


  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Header  />
      </>
    );
  }
}
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {

})(HeaderContainer);
