use("sample_mflix");


// movies ระหว่างปี 1950-1970 ที่ฉายใน USA
db.movies.find({
  year: { $gte: 1950, $lte: 1970 },
  countries: "USA"
});


// จำนวน movies ที่มี genre Drama และ History หลังปี 1970
db.movies.find({
  year: { $gt: 1970 },
  genres: { $all: ["Drama", "History"] }
}).count();


// จำนวนหนังที่ Roy L. McCardell แสดง
db.movies.find({
  cast: "Roy L. McCardell"
}).count();


// จำนวนหนังที่ Hal Roach กำกับ
db.movies.find({
  directors: "Hal Roach"
}).count();


// หนังที่เก่าที่สุดที่ Hal Roach กำกับ
db.movies.find({
  directors: "Hal Roach"
})
.sort({ year: 1 })
.limit(1);


// ข้อมูลรางวัลของหนังที่ Hal Roach กำกับ

/* db.movies.find({
  directors: "Hal Roach"
},{
  title: 1,
  year: 1,
  "awards.wins": 1
}); */

/*db.movies.find(
{
  directors: { $in: ["Hal Roach"] }
},
{
  title: 1,
  "awards.wins": 1,
  _id: 0
}
);*/

/////////////////


db.movies.aggregate( [
    { 
        $match: { 
            directors: { $in: ["Hal Roach"] } 
        } 
    },
    { 
        $project: {
            _id: 0,
            title: "$title",
            totalWins: { $sum: "$awards.wins" },
        },
    },
] );
