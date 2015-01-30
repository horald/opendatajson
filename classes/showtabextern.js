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

        var index = 0;
	mydata.proposals.forEach(function(entry) {
          index = index + 1;
        
          lweiter=true;
          if (lweiter) {
            dochtml = dochtml + '<tr>';
            dochtml = dochtml + '<td><a href="showdata.html?id='+index+'">'+entry.proposal.title+'</a></td>';
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
