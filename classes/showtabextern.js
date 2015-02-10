function cbfunc(mydata) { 
        console.log('success');

        var ni = document.getElementById('mydiv');
        var newdiv = document.createElement('div');
        var dochtml=''; 

        dochtml = '<table class="table">';
        dochtml = dochtml + '<tr>';
        dochtml = dochtml + '<th>Nr</th>';
        dochtml = dochtml + '<th>Titel</th>';
        dochtml = dochtml + '<th>Ort</th>';
        dochtml = dochtml + '</tr>';

        var index = 0;
	mydata.proposals.forEach(function(entry) {
          index = index + 1;
        
          lweiter=true;
          if (lweiter) {
            dochtml = dochtml + '<tr>';
            dochtml = dochtml + '<td>'+index+'</td>';
            dochtml = dochtml + '<td><a href="showdata.html?id='+index+'">'+entry.proposal.title+'</a></td>';
            dochtml = dochtml + '<td>'+entry.proposal.district+'</td>';
            dochtml = dochtml + '</tr>';
          }	
	});

        dochtml = dochtml + '</table>';
        newdiv.innerHTML = dochtml;
        ni.appendChild(newdiv);

}

var url = "http://json2jsonp.com/?url=http://buergerhaushalt.stadt-koeln.de/2015/json&callback=cbfunc"
$.ajax({
 type: 'GET',
 url: url,
  jsonp:false,
  dataType :"jsonp",
 crossDomain: true,
 processData: true
});
