    $(function(){
 
     //var url = 'https://buergerhaushalt.stadt-koeln.de/2015/json/';
     var url = '../data/opendata.json';
     $.getJSON(url,function(mydata){
        console.log('success');

        var ni = document.getElementById('mydiv');
        var newdiv = document.createElement('div');
        var dochtml=''; 

        dochtml = '<table class="table">';
        dochtml = dochtml + '<tr>';
        dochtml = dochtml + '<th>Titel</th>';
        dochtml = dochtml + '</tr>';

	mydata.proposals.forEach(function(entry) {
	//mydata.properties[0].forEach(function(entry) {
        
          lweiter=true;
          if (lweiter) {
            dochtml = dochtml + '<tr>';
            dochtml = dochtml + '<td>'+entry.proposal.title+'</td>';
//            dochtml = dochtml + '<td>'+entry.attributes.Stadtbezirk+'</td>';
            dochtml = dochtml + '</tr>';
          }	
	});

        dochtml = dochtml + '</table>';
        newdiv.innerHTML = dochtml;
        ni.appendChild(newdiv);

      }).error(function(){
        console.log('error');
      });
    });
