//🌟 Exercise 4: Group Chat

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//Using the array above, console.log the number of users that are connected to the group

if (users.length === 0) {
    console.log("No one is online");
} else if (users.length === 1) {
    console.log(users[0] + " is online");
} else if (users.length === 2) {
    console.log(users[0] + " and " + users[1] + " are online");
} else {
    const additionalUsers = users.length - 2;
    console.log(users[0] + ", " + users[1] + " and " + additionalUsers + " more are online");
}