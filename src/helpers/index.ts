
function getDate():Date{
	const date:Date = new Date()
	if(date.getHours()>=22 && date.getHours()<9){
		date.setHours(9)
		date.setMinutes(22)
	}else {
		date.setMinutes(date.getMinutes()+1)
	}
	return date
}

export {getDate}