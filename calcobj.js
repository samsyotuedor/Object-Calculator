(function() {
    var calculadora ={
        valor1 : 0,
        valor2: 0,
        estado:"inicio",
        tipo:"",
        resultado:document.getElementById("resultado"),
        isFloat:function(n){
            var result = (n - Math.floor(n)) !== 0;
            if(result){
                return true;
            } else{
                return false;
            }
           
        },
        calcular: function(){
            var n1=this.isFloat(this.valor1) ?parseFloat(this.valor1):parseInt(this.valor1)
            var n2=this.isFloat(this.valor1)? parseFloat(this.valor2):parseInt(this.valor2)
            var res="";
            switch(this.tipo) {
                case "*":
                    res=n1*n2
                    break;
                case "/":
                    res=n1/n2
                    break;
                case "+":
                    res=n1+n2
                    break;
                case "-":
                    res=n1-n2
                    break;
            }
            res = this.isFloat(res)? res.toFixed(2): res;
            this.tipo="";
            this.valor1 =res;
            this.valor2=0;
            this.resultado.value=res;
        },
        borrar:function(){
            this.resultado.value="0";
            this.valor1 -0;
            this.valor2=0;
            this.tipo="";
        },
        actualizarValor:function(n){
            this.resultado.value==0?this.resultado.value="":null;
            if(!isNaN(this.resultado.value)){
                this.valor1= this.valor1+n
            }else{
                this.valor2=this.valor2+ n
            }
            this.resultado.value=this.resultado.value+n
        },
        operacion:function(o){
            var value = this.resultado.value;
            if(!isNaN(this.resultado.value)){
                value= this.resultado.value+o;
            }
            this.resultado.value=value;
            this.tipo=o;
        },
    };

    //functiones
    function clickNumero(n){
        calculadora.actualizarValor(n)
    }
    function clickOperacion(n){
        calculadora.operacion(n)
    }

    //eventos 
    var numeros = document.getElementsByClassName("numero");
    for(var i = 0; i<numeros.length; i++){
        num = numeros[i];
        numeros[i].addEventListener("click" , function(num){
            clickNumero(num.target.value)
        });

    };
    var operaciones = document.getElementsByClassName("operacion");
    for (var i = 0; i<operaciones.length; i++) {
        ope = operaciones[i];
        operaciones[i].addEventListener("click" , function(ope){
            clickOperacion(ope.target.value)
        });
    };
    document.getElementsByClassName("calcular")[0].addEventListener("click", function(num){
        calculadora.calcular()
    });
    document.getElementsByClassName("borrar")[0].addEventListener("click", function(num){
        calculadora.borrar()
    });
       
})();