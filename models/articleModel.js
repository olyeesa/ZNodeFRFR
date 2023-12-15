let connection=require("../mysql.js");

exports.getAll=async function(req,res){
    let arr=[]
    await connection.query("SELECT * FROM article")
    .then(data=> {
        console.log("data");
        console.log(data);
        for (let i=0;i<data.lenght;i++)
        {
            arr[i]=data[0][i];
        }
    })
    .catch(err =>{
        console.log(err);
    })
    console.log("arr");
    console.log(arr);
    return arr;
}

exports.getOne=async function(req,res, idArticle){
    let arr=[]
    let sql="select * from article where idArticle=?";
    console.log(req);
    filter=[req];
    console.log(req);
    await connection.query(sql,filter)
    .then(data=> {
        console.log("data");
        console.log(data);
        for (let i=0;i<data.lenght;i++)
        {
            arr[i]=data[0][i];
        }
    })
    .catch(err =>{
        console.log(err);
    })
    console.log("arr");
    console.log(arr);
    return arr;
}

exports.editOne=async function(req,res, idArticle){
    let arr=[]
    let sql="insert into article values('',?,?,?)";
    filter=[req.titleArticle, req.textArticle, req.descriptionArticle];
    await connection.query(sql,filter)
    .then(data=> {
    })
    .catch(err =>{
        console.log(err);
    })
}
exports.deleteOne=async function(req,res, idArticle){
    console.log("model del");
    console.log(req);
    let sql="delete from article where idArticle=?";
    filter=[req];
    await connection.query(sql,filter)
    .then(response=> {
        console.log("ok");
    })
}