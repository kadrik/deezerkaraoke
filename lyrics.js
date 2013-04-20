
var API_KEY="82be3ea3f79ea404d45f47607c103eff";
var lyrics = new Array();

function getTrackLyrics(title, artist)
{
    $.ajax({
	       dataType:"jsonp",
	       url :"http://api.musixmatch.com/ws/1.1/matcher.subtitle.get",
	       data :{
		   apikey: API_KEY,
		       format: "jsonp",
		       q_track: name,
		       q_artist: artist,
		       f_subtitle_length:300,
		       f_subtitle_length_max_deviation: 500,
		       subtitle_format:"mxm"
	     }, 
	    success:function( data ) {
		   lyrics = data;
		   $("#debug").append(data);
	     },
	   error:function (data) {
		   $("#debug").append(data);
	     }
	  });
	console.log("current track lyrics", lyrics);
}


function getWholeLyrics()
{
 
}


function getLyricsWithTime(time)
{
}
