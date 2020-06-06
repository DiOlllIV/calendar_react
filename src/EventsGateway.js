const baseUrl = "https://5e870549781e48001676b644.mockapi.io/api/v1/calendar";

export const getEventsList = () =>
  fetch(baseUrl).then((response) => response.json());

export const createEvent = (eventsData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventsData),
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  });
