var etag;
var id;

{
  "kind": "calendar#calendarListEntry",
  "etag": etag, //Get this
  "id": string, //Get this
  "summary": "Planner",
  "description": "Plan out school events",
  "location": "Toronto",
  "timeZone": "America/Toronto",
  "summaryOverride": string,
  "colorId": string,
  "backgroundColor": string,
  "foregroundColor": string,
  "hidden": false,
  "selected": true,
  "accessRole": string,
  "defaultReminders": [
    {
      "method": "sms",
      "minutes": 120
    }
  ],
  "notificationSettings": {
    "notifications": [
      {
        "type": "eventCreation",
        "method": "sms"
      }
    ]
  },
  "primary": true,
  "deleted": false
}

var summary;
var location;
var description;
var startDateTime;
var endDateTime;
var timeZone;

var event = {
  'summary': summary,
  'location': location,
  'description': description,
  'start': {
    'dateTime': startDateTime,
    'timeZone': 'America/Toronto',
  },
  'end': {
    'dateTime': endDateTime,
    'timeZone': 'America/Toronto',
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
