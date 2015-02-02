    $(function(){
 
     var nid = GET('nid');
     var url = '../data/comments'+nid+'.json';
     //var url = 'https://buergerhaushalt.stadt-koeln.de/2015/json/comments/1400';
     $.getJSON(url,function(mydata){
        console.log('success');

        var ni = document.getElementById('mydiv');
        var newdiv = document.createElement('div');
        var dochtml=''; 
        var nid = GET('nid');

        dochtml = 'Nr.:'+nid;
        dochtml = dochtml + '<h2>'+decodeURI(GET('comment'))+'</h2>';

        dochtml = dochtml + '<table class="table">';
        dochtml = dochtml + '<tr>';
        dochtml = dochtml + '<th>Nr</th>';
        dochtml = dochtml + '<th>Titel</th>';
        dochtml = dochtml + '<th>Kommentar</th>';
        dochtml = dochtml + '<th>erzeugt</th>';
        dochtml = dochtml + '<th>aktualisiert</th>';
        dochtml = dochtml + '</tr>';

        var index = 0;
	mydata.comments.forEach(function(entry) {
          index = index + 1;
        
          lweiter=true;
          if (lweiter) {
            dochtml = dochtml + '<tr>';
            dochtml = dochtml + '<td>'+index+'</td>';
            dochtml = dochtml + '<td>'+entry.comment.title+'</td>';
            dochtml = dochtml + '<td>'+entry.comment.Kommentar+'</td>';
            dochtml = dochtml + '<td>'+entry.comment.created+'</td>';
            dochtml = dochtml + '<td>'+entry.comment.aktualisiert+'</td>';
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
