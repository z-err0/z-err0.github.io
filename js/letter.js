
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Gửi tới&nbsp;&nbsp;Sea", 
				"Mình quen nhau cũng ba tháng rồi bé con nhỉ<br><br>Chỉ mới ba tháng thôi mà chúng mình đã trải qua biết bao chuyện cùng nhau em nhỉ, vui có, buồn có. Dù rằng chúng ta chưa thể hẹn hò ngoài đời thật, dịp noel này vì dịch mà kèo first date cũng bị delay...",
				"^200Nhưng mà với anh, first date của chúng mình là ngày 19/10, không biết em còn nhớ không, ngày mà anh gọi là ngày của em ấy... <br>Lúc ban đầu anh cũng không biết là em mới vừa chia tay người cũ, anh chỉ cảm thấy mấy hôm đó tâm trạng em không được tốt, mà anh thì không muốn để em ở một mình... Nên hôm đấy đã dành cả tối để chơi game với em, tặng em bộ pvc mới, cùng em tâm sự...Với anh đó là một buổi dating tuyệt vời, anh hi vọng sau này mình sẽ có thêm nhiều buổi dating như vậy nữa bé con nhé ;)",
				"^200Có đôi khi anh lại chính là người khiến cho em buồn :(<br>May mắn không hiểu sao hôm đó em đuổi anh đi ngủ, nằm ngủ rồi lại thấy lo lắng, nhớ em, không muốn để em một mình...anh liền gạt cái tôi sang một bên, bám dính lấy em cả tối :p <br>Càng nghĩ lại anh càng thấy mình đúng là một người bạn trai thật tệ, nhưng anh cũng vui vì hôm đó mình đã chia sẻ, tâm sự với nhau nhiều điều, hiểu về nhau hơn ý...",
				"^200Anh nghĩ có lẽ yêu chính là như vậy...<br>Dù là vui, hay buồn, miễn là hai đứa ở bên nhau, mặt dày bám lấy nhau, làm phiền nhau, liền có thể vượt qua...",
				"^200Anh biết là dạo này em đang bận dọn nhà, thi cử cuối năm, anh cũng bận công việc nữa, nên không có thời gian cho nhau như những ngày đầu<br>Với cả anh đọc trên mạng thấy người ta bảo là do hai đứa yêu nhau cũng một thời gian ý, cũng không còn nhiều cái để 888 với nhau như ngày đầu mới yêu nữa...nhưng mà anh ko muốn thế, anh muốn chúng mình cuốn lấy nhau cả đêm 888 như những ngày đầu cơ :(",
				"^200Nên hôm nay, anh làm cái này, vừa muốn ôn lại kỷ niệm vui, buồn chúng ta trải qua cùng nhau trong ba tháng qua, vừa muốn...tỏ tình với em<br>Chúng ta yêu lại từ đầu để hâm nóng tình cảm tiếp nhó, anh muốn 888 đến sáng như những ngày đâu cơ :< <br>",
				"^200Em có chấp nhận lời tỏ tình của anh không? Có muốn tiếp tục được anh chiều chuộng nữa không? Cho anh biết nhé...<br>Nghe nói ai đó chỉ thích cảm giác được anh chiều, được anh bảo vệ chứ không yêu anh =))<br>Ngốc ạ, đó là YÊU chứ gì nữa =))<br>Ps : Anh sửa lại tiêu đề rồi nhó, không phải valentine nữa, cũng không gọi thẳng tên em nữa =))...Phong cách tỏ tình vừa lãng mạn kiểu châu Á, vừa thực dụng kiểu châu Âu, hết lước chấm nuôn!!"],
			typeSpeed: 90,
			backSpeed: 20
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
