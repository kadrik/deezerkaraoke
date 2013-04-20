
var API_KEY="82be3ea3f79ea404d45f47607c103eff";
var lyrics = new Array();

function getTrackLyrics(title, artist, handlerloaded)
{
    $.ajax({
	       dataType:"jsonp",
	       async: false,
	       url :"http://api.musixmatch.com/ws/1.1/matcher.subtitle.get",
	       data :{
		   apikey: API_KEY,
		       format: "jsonp",
		       q_track: title,
		       q_artist: artist,
		       f_subtitle_length:300,
		       f_subtitle_length_max_deviation: 500,
		       subtitle_format:"mxm"
	     }, 
	    success:function(data) {
		   if (data.message.body == null) {
			//Track not found, body is null
			console.log("Track "+ title + " " + artist + " not found, body is null");
			lyrics = null;
   			}
		   else {
			//Found the track, body not null
			lyrics = JSON.parse(data.message.body.subtitle.subtitle_body);
			console.log("current track lyrics", lyrics);
			console.log("Track "+ title + " " + artist + " FOUND");
			}
		   //$("#debug").append(data);
	     },
	   error:function (data) {
		console.log("ERROR ", data);
		   //$("#debug").append(data);
	    },
	   complete:function (data) {
		handlerloaded();
	    }

	  });
    
    //console.log("current track lyrics", lyrics);
    //return lyrics;
}

function getWholeLyrics()
{
    var res = "";
    for (var i = 0; i < lyrics.length; i++) {
	var part = lyrics[i];
	res = res+"<br>"+part.text;

    }
    return res;
}


function getLyricsWithTime(time)
{

}

