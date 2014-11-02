// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

console.log("1. Fortune Teller")
var no_child = Math.floor((Math.random() * 10) + 1);
var partner_name = "Orlando Bloom" ;
var geographic = "San Francisco" ;
var job_title = "housewife";

console.log("You will be a " + job_title + " in " + geographic + ", and married to " + partner_name + " with " + no_child + " kids.");