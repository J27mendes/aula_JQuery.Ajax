function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
        console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
               console.log(response);
           
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#numeroCep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
            /*$("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            /*codigo aqui em baixo, só que mais menor de bom c:
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("ibge").innerHTML = response.ibge;
            document.getElementById("uf").innerHTML = response.uf;*/   
            
        } 

    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
