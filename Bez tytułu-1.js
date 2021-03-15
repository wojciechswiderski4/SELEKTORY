var text="URL;MASTER;NOT SHARED\n";
jQuery(".sharing.column-sharing:has('.statik-share-icon')").closest("tr").find(".view [href]").each((j,k)=>{text += jQuery(k).attr("href") + ";" +"TRUE"+ ";\n"});

jQuery(".sharing.column-sharing:empty()").closest("tr").find(".view [href]").each((j,k)=>{text += jQuery(k).attr("href") + ";" + ";"+"TRUE\n"});

jQuery(".sharing.column-sharing:has('.button')").closest("tr").find(".view [href]").each((j,k)=>{text += jQuery(k).attr("href") + ";" + ";\n"});

var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', "links.csv");
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);