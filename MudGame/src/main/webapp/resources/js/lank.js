$(function(){
	
	$.ajax({
		url: "/showLanking",
		type: "get",
		contentType: "application/json; charset=utf-8",
		success: function(result){
				console.log(result)
				var brood;
				var lank = "";
				for(var i =0; i<10; i++){
						if(result[i] != null){
						switch(result[i].brood){
						case("elf"):
							brood = "엘프";
							break;
						case("orc"):
							brood = "오크";
							break;
						}
						
							$(".mainCenter table").append("<tr><td>"+(i+1)+"</td><td>"+result[i].level+"</td><td colspan='2'>"+result[i].playerId+"</td><td>"+result[i].camp+"</td><td>"+brood+"</td></tr>");
							if(result[i].id == id){
								lank = i+1;
							}
						}
				}
				if(lank != ""){
					$(".mainCenter").append("<div>내순위 : "+lank+"위</div>");
				}else{
					$(".mainCenter").append("<div>순위 밖 입니다.</div>");
				}
			}
		})
})

