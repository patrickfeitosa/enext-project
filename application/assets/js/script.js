function loadJSON(path)
{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState === XMLHttpRequest.DONE) {
			if (xhr.status === 200) {
				data = JSON.parse(xhr.responseText);

				var html = "<div class='row content'>";
				var lightbox_content="";

				for (i = 1; i < 7; i++) {
					html += "<div class='col col-3'>"
					+"<img src='./assets/img/products/"+data.potions[i].image+"' onclick='moreInfo("+i+")'>"
					+"<div class='row' id='product-info'>"
					+"<div class='col col-2 name-product'><strong>"+data.potions[i].name
					+"</strong> - </div>"
					+"<div class='col col-2 price-product'> $"+data.potions[i].price
					+"</div>" 
					+"</div>" 
					+"</div>";

					lightbox_content += "<div id='product"+i+"' class='lightbox'>"
					+"<div class='modal'>"		
					+"<div class='row'> "		
					+"<div class='col'> "			
					+"<div class='fechar' onclick='closeInfo("+i+")'>"
					+"<i class='fa fa-times' aria-hidden='true'></i>"
					+"</div>"
					+"</div>"
					+"</div>"		
					+"<div class='row'> "	

					//Colocando a imagem no lightbox
					+"<div class='col col-2'><img src='./assets/img/products/"+data.potions[i].image+"'></div>"

					//Colocando as informações do produto
					+"<div class='col col-2'>"

					//Colocando o titulo
					+"<div class='titulo'>"+data.potions[i].name+"</div>"

					//Colocando Usos/Efeitos
					+"<div class='titulo'>Use/Effects:</div>"
					+"<div class='subtitulo'>"+data.potions[i].effect+"</div>"

					//Colocando os Ingredientes
					+"<div class='titulo'>Ingridients:</div>";

					var ingredientes="";
					for(j=0; j < data.potions[i].ingredients.length;j++){
						ingredientes +="<div class='subtitulo-ingrediente'>"+data.potions[i].ingredients[j]+"</div>";
					}

					lightbox_content +=ingredientes;
					
					//Colocando o Preço
					lightbox_content +="<div class='titulo'>Price:</div>"					
					+"<div class='subtitulo-preco'> $"+data.potions[i].price+"</div>"
					+"<input type='button' value='ADD TO CART' class='bt-buy'>"
					+"</div>"
					+"</div>"
					+"</div>"
					+"</div>";

					
				}

				html += "</div>";

				console.log(lightbox_content);
				document.getElementById('body-content').innerHTML = html;	
				document.getElementById('lightbox-products').innerHTML =lightbox_content;
			} 
		}
	};
	xhr.open("GET", path, true);
	xhr.send();
}

function moreInfo(id){
	var div = document.getElementById('product'+id);
	div.style.display = 'block';
}

function closeInfo(id){
	var div = document.getElementById('product'+id);
	div.style.display = 'none';

}