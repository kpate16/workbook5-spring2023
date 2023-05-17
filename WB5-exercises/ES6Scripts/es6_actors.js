let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },

  {
    memID: 194,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Aaaaaaa?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

console.log("Who is the Academy Member whose ID is 187");
let member = academyMembers.find((m) => m.memID == 187).name
console.log(member);

console.log("==========");
console.log("Who has been in at least 3 film");
function findMembersWith3Films() {
  return academyMembers.filter(function (member) {
    return member.films.length >= 3;
  });
}
console.log(findMembersWith3Films());

console.log("///////////////////////");
console.log(" Who has a name that starts with Bob");
let membersWithNamedBob = academyMembers.filter(member => member.name.startsWith("Bob"));
membersWithNamedBob.forEach(member => console.log(member));

