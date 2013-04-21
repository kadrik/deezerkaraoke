
var API_KEY="82be3ea3f79ea404d45f47607c103eff";
	var lyrics = new Array();

function getTrackLyrics(title, artist, time, handlerloaded)
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
		    f_subtitle_length:time,
		    f_subtitle_length_max_deviation: 10,
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
		    }
	        },
		error:function (data) {
		    console.log("ERROR ", data);
	        },
		complete:function (data) {
		handlerloaded();
	    }
	    
	});
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
    for (var i = 0; i < lyrics.length; i++) {
	var part = lyrics[i];
	if ((part.time.total > time) && (part.time > (time - 2.0)))
	    return part.text;
    }
}

