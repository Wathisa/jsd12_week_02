// เลือก database ที่จะใช้งาน
use("sample_mflix");

// แสดงหนังทั้งหมดที่ออกฉายในปี 1995 และมี genre เป็น Action
// แสดง title และ year ของหนัง Action ปี 1995
db.movies.find(
{
  year: 1995,              //เงื่อนไขที่1
  genres: "Action"         //เงื่อนไขที่ 2
},
/*ด้านล่างคือ projection คือสั่งว่าอยากให้แสดง field อะไรบ้าง
ปกติ MongoDB จะแสดง _id เสมอโดย default ถ้าเราไม่อยากเห็น _id ต้องเขียน _id: 0 
0 = ไม่แสดง field นี้ , 1 = แสดงผล field นี้ */
{
  title: 1,   //แสดงชื่อหนัง
  year: 1,    //แสดงปีที่ฉาย
  genres: 1,  //แสดงประเภทหนัง
  _id: 0      //ไม่ต้องแสดง id
});

//##################

// หา movies ที่ภาษาหลักเป็น French หรือ Spanish
db.movies.find(
{
  $or: [
    { languages: "French" },   //หนังที่มีภาษา French
    { languages: "Spanish" }   //หนังที่มีภาษา Spanish
  ]
},
{
  _id: 0,        //ไม่ต้องแสดง id
  title: 1,      //แสดงชื่อหนัง
  languages: 1   //แสดงภาษา
}
);

//##################

// หา movies หลังปี 2010
// และต้องเป็น Drama หรือมี imdb rating >= 8

db.movies.find(
{
  year: { $gt: 2010 },  // year > 2010

  $or: [
    { genres: "Drama" },            // genre เป็น Drama
    { "imdb.rating": { $gte: 8 } }  // หรือ imdb rating >= 8
  ]
},

// เลือก field ที่ต้องการแสดง
{
  _id: 0,
  title: 1,
  year: 1,
  genres: 1,
  "imdb.rating": 1
}

).limit(10); // แสดงแค่ 10 เรื่อง