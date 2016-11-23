$(document).ready(function(){
	$('.responsive.table-wrapper').each(function(){
		var headers = Array();
		$(this).find('thead tr td').each(function(){
			headers.push(($(this)[0].textContent===undefined) ? $(this)[0].innerText : $(this)[0].textContent);
		});
		$(this).find('tbody tr').each(function(){
			var temp = 0;
			$(this).children('td').each(function(){
				$(this).attr('data-label',headers[temp]);
				attr = $(this).attr('colspan');
				temp++;
			});
		});
	});
});