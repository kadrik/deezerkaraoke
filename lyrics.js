
var API_KEY="82be3ea3f79ea404d45f47607c103eff";
//var lyrics = new Array();

function getTrackLyrics(title, artist)
{
    $.ajax({
	       dataType:"jsonp",
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
			console.log("Track not found, body is null");
   			}
		   else {
			//Found the track, body not null
			lyrics = JSON.parse(data.message.body.subtitle.subtitle_body);
			console.log("Track Found", lyrics);
			}
		   $("#debug").append(data);
	     },
	   error:function (data) {
		   $("#debug").append(data);
	     }
	  });
	console.log("current track lyrics", lyrics);
	return lyrics;
}

function getWholeLyrics()
{
    alert(lyrics.body);
}


function getLyricsWithTime(time)
{

}

