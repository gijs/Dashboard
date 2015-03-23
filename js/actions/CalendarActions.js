var AppDispatcher = require('../dispatcher/AppDispatcher');
var DashboardConstants = require('../constants/DashboardConstants');

var CalendarActions = {

  recieveCalendarData: function(calendarData, calendarId) {
    AppDispatcher.dispatch({
      actionType: DashboardConstants.RECIEVE_RAW_CALENDAR_EVENTS,
      calendarData: calendarData,
      calendarId: calendarId
    });
  }

};

module.exports = CalendarActions;