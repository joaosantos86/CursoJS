/*
Primitivos(imutáveis) - strin, number, boolean, undefined, null (bigint, symbol) - valor

    let a = 'A';
    let b = a; // Cópia
    console.log(a, b);

    a = 'Outra Coisa' ;
    console.log(a, b);
*/

/*
Referência (multável) - array, object, fuction

    let a = [1, 2, 3];
    let b = a; / let b = [...a]; // spread  
    console.log(a, b);
    
    a.push(4);
    console.log(a, b);

    b.pop();
    console.log(a, b);

    //

    const a  = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
    };

    const b = {...a}; // spread (copia conteúdo para não puxar mesmo assunto na memoria)

    a.nome = 'João'
    console.log(b);
*/

