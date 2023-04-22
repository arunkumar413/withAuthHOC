import React from "react";

function WithAuth(WrappedComponent, userId) {
  return class extends React.Component {
    state = {
      loggedIn: false,
      loading: false
    };

    componentDidMount() {
      // call api to validate user by userId
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loggedIn: !!userId, loading: false });
      }, 2000);
    }

    render() {
      if (this.state.loading) {
        return <p>loading....</p>;
      }
      if (this.state.loggedIn) {
        return <WrappedComponent {...this.props} />;
      }
      return <p>Unauthorized User!</p>;
    }
  };
}
export default WithAuth;
