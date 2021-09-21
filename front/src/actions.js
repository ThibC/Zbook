import { requestEventsInRange, requestEventCreate, requestEventUpdate, requestEventDelete } from './requests'
import { createMeeting } from './apiClient';

export default {

  toggleWeekends() {
    return {
      type: 'TOGGLE_WEEKENDS'
    }
  },

  requestEvents(startStr, endStr) {
    return (dispatch) => {
      return requestEventsInRange(startStr, endStr).then((plainEventObjects) => {
        dispatch({
          type: 'RECEIVE_EVENTS',
          plainEventObjects
        })
      })
    }
  },

  createEvent(plainEventObject) {
    return (dispatch) => {
      console.log("ICI");
      console.log(plainEventObject);

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

  updateEvent(plainEventObject) {
    return (dispatch) => {
      return requestEventUpdate(plainEventObject).then(() => {
        dispatch({
          type: 'UPDATE_EVENT',
          plainEventObject
        })
      })
    }
  },

  deleteEvent(eventId) {
    return (dispatch) => {
      return requestEventDelete(eventId).then(() => {
        dispatch({
          type: 'DELETE_EVENT',
          eventId
        })
      })
    }
  }

}
