//Day 5 coding challange
//Question 1:Your Own Array:Think of your favourite mode of transportation,and make list that storesseveral example.
//Use your list to print a series of statements about these items.
var transports: string[] = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];

transports.forEach(transport => {  console.log(`I would like to own a ${transport}.`);
});

//Question 2:Guest list.
var guests: string[] =["Arshmah","Areeba","Alishba"];

guests.forEach(guest =>{  console.log(`Dear ${guest}, would you like to join me for dinner?`);
})

//Question 3:Changing Guest List
var unableToAttend ="Alishba";
console.log(` ${unableToAttend} can't make it to dinner.`);
//Replace the guest
var newGuest ="Laraib";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitations
guests.forEach(guest =>{ console.log(`Dear ${guest}, would you like to join me for dinner?`);
})