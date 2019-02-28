var fs= require('fs');
var exp = require('express');
var app = exp();

app.listen(8080);
app.use(exp.json());
app.use(exp.urlencoded());

app.set('view engine', 'ejs');
app.use(exp.static(__dirname+'/public'));

app.set('view engine','ejs');

app.get('/test/:name',function(req,res){

	res.send(' This is test to the name '+req.params.name);

});


/*app.get('/register',function(req,res)
{
 res.render('register');

});*/
console.log("bolo");
app.get('/',function(req,res)
{
  console.log("hello");
   res.render('login');
});

app.get('/login',function(req,res)
{
  console.log("hello");
   res.render('login');
});

app.get('/register',function(req,res)
{
  res.render('register');
}
);
//--------
/*var notes = [];
var note ={
  'username':username,
  'pass':pass
};*/

var obj ={
  'user' : {'username':'','pass': ''}
};

app.post('/book',function(req,res){
    var un = req.body.user;
	var src = req.body.sec;
	var dec = req.body.dec;
	var time = req.body.time;
	//var da = fs.readFileSync('data.json','utf-8');
    //var ob = JSON.parse(da);
    var da1 = fs.readFileSync('price.json','utf-8');
    var ob1 = JSON.parse(da1);
	console.log(src);
	console.log(dec);
	console.log(time);
    var t1 = 0;
    var t2 = 0;
	ob1.sc.forEach(function(item){

		if(item.szc==src){
			t1 = item.price; 
		}
		if(item.szc==dec){
			t2 = item.price;
		}

	});

	var t = t1 - t2;
	if(t<1){
		t = -t;
	}
	res.render('book',data = {user:un,cost:t});

});

app.post('/ticket', function(req,res){
	var un = req.body.user;
	var cc = req.body.cc;
	var cvv = req.body.cvv;
	var dat = req.body.date;
    res.render('suc');

});


app.post('/register',function(req,res)
{
 var name=req.body.name;
 var email=req.body.email;
 var password=req.body.password;
 var re_password=req.body.re_password;
  if(password!=re_password)
  {
    res.render('not');
  }
  else {
    console.log('a');
    notes= [];
    note ={
      email,
      password
    };
    try {
      console.log('hello');
      console.log(notes);
      var notesstring=fs.readFileSync('jfile.json','utf8');
      console.log(notesstring);
      notes=JSON.parse(notesstring);
     console.log(notes);
    } catch (e) {

    }
    //console.log(notes);
    console.log(note.email);
    console.log(email);
    var duplicateNote = notes.filter((note) => note.email===req.body.email);
      console.log(duplicateNote);
      if(duplicateNote.length===0)
      {
        console.log('c');
        note.email=req.body.email;
        note.password=req.body.password;
        var notesstring=fs.readFileSync('jfile.json','utf8');
        console.log(notesstring);
        notes=JSON.parse(notesstring);

    notes.push(note);
    fs.writeFileSync('jfile.json',JSON.stringify(notes),'utf8');
    da = fs.readFileSync('price.json','utf-8');
    var obj = JSON.parse(da);

    res.render('main',data = {name:name,obj:obj});
      }
      else{
        console.log('b');
        res.render('profile');
          }
}
});
//yha se krna h
app.post('/login',function(req,res){
  var name=req.body.Email;
  var pass=req.body.Password;

  var notes = [];
  var note ={
    username:name,
    pass:pass
  };

  note.username=name;
  note.pass=pass;
    console.log(note);
  //var json = JSON.stringify(note);
  try {
    var notestring = fs.readFileSync('jfile.json','utf8');
    notes= JSON.parse(notesstring);
  } catch (e) {

  }

  //notes.push(note);
  //fs.writeFileSync('jfile.json',JSON.stringify(notes),'utf8');
  //fs.close();
  //fs = require('fs');
  //obj.user.push();
  //var json =JSON.stringify();

  //fs.writeFileSync('jfile.json',json,'utf8');

  try {
    var no= fs.readFileSync('jfile.json','utf8');
    console.log(no);
  var  notes = JSON.parse(no);
   console.log(notes);

   console.log("ajeet singh");
   if(notes.user[name]==pass){
   console.log("hello");
   res.render('main',data = {name:name,obj:obj});
 }
  else {
    res.render('not');
  }
  } catch (e) {

  }


  });







/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made' +req.url);
  if(req.url ==='/home')
  {
    res.writeHead(200, {'content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  /*else if(req.url ==='/contact')
  {
    res.writeHead(200, {'content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');*/

