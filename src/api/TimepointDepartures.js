// Once directions, routes, and stops are figured out, we can use this endpoint to figure out the departureText.
// if array is empty, there are no more routes for the day.
// if array exists, figure out the next departure by turning the departureTime (in epoch) into DateTime.
// Match both Date.now and departureTime into the same dateTime format.
// Next, convert the dateTime format into minutes. departureTime - DateTime.now // 60
// DONE!
