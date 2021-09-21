import { createMeeting } from './apiClient';

export default {

  toggleWeekends() {
    return {
      type: 'TOGGLE_WEEKENDS'
    }
  },

  createEvent(plainEventObject) {
    return (dispatch) => {
      return createMeeting(
          plainEventObject.title,
          plainEventObject.start,
          plainEventObject.end,
      ).then((newEventId) => {
        dispatch({
          type: 'CREATE_EVENT',
          plainEventObject: {
            id: newEventId,
            ...plainEventObject
          }
        })
      })
    }
  },

}
