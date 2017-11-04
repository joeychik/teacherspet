var summary;
var location;
var description;
var startDateTime;
var endDateTime;
var timeZone;

//'2015-05-28T09:00:00-07:00'


var event = {
  'summary': summary,
  'location': location,
  'description': description,
  'start': {
    'dateTime': startDateTime,
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': endDateTime,
    'timeZone': 'America/Los_Angeles',
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'},
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
};

calendar.events.insert({
  auth: auth,
  calendarId: 'primary',
  resource: event,
}, function(err, event) {
  if (err) {
    console.log('There was an error contacting the Calendar service: ' + err);
    return;
  }
  console.log('Event created: %s', event.htmlLink);
});
