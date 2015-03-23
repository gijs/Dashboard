
var React = require('react');

//  The stores
var PageStore = require('../stores/PageStore');

/*
  Get the current state from the GistStore
 */
function getAppState()
{
  return{
    page: PageStore.getPage()
  };
}

var DashboardApp = React.createClass({

  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    var setState = this.setState;    

    //  Add store listeners ... and notify ME of changes
    PageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {

    //  Remove store listeners
    PageStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    //  Determine what page to show
    var ComponentToLoad = this.state.page;

    //  Set the current page
  	return (
      <ComponentToLoad position={this.props.position} calendarid={this.props.calendarid} zipcode={this.props.zipcode} />
  	);
  },

  _onChange: function() {
    this.setState(getAppState());
  }

});

module.exports = DashboardApp;