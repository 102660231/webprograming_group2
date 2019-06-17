
	function submit() {
		score = 0

		ans1 = document.getElementById('answer1').value
		if (ans1 == "D"){
			score++
		}
		ans2 = document.getElementById('answer2').value
		if (ans2 == "D"){
			score++
		}
		ans3 = document.getElementById('answer3').value
		if (ans3 == "A"){
			score++
		}

		alert("Your score is " + score + "/3")
	}
