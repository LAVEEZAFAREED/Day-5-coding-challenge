//Day 5 coding challange
//Question 1:Your Own Array:Think of your favourite mode of transportation,and make list that storesseveral example.
//Use your list to print a series of statements about these items.
var transports = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//Question 2:Guest list.
var guests = ["Arshmah", "Areeba", "Alishba"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
//Question 3:Changing Guest List
var unableToAttend = "Alishba";
console.log(" ".concat(unableToAttend, " can't make it to dinner."));
//Replace the guest
var newGuest = "Laraib";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
