let room = {
    number: 23
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key == "occupiedBy" && !Array.isArray(value) || key == "self") ? undefined : value;
}));

/* в результате должно быть:
{
"title":"Совещание",
"occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
"place":{"number":23}
}
*/

