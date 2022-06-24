$('#name').on('input', function(e) {
    if ($(this).val()) {
        const name = $(this).val();
        $('#name-placeholder').text(`Olá ${name}!`);
    } else {
        $('#name-placeholder').text('Ei! Por que apagou?');
    }
});

$('#email').on('input', function(e) {
    if ($(this).val()) {
        const name = $(this).val();
        $('#email-placeholder').text(`O seu e-mail não será armazenado em nenhum banco de dados`);
    } else {
        $('#email-placeholder').text('Não se preocupe, não vou mandar spam para o seu e-mail!');
    }
});

$('#password').on('input', function(e) {
    if ($(this).val()!=12345 && $(this).val()) {
        $('#senha-placeholder').text('Fique tranquilo(a), não vou roubar sua senha :)')
    } else if ($(this).val()==12345) {
        $('#senha-placeholder').text('Colocou 12345 mesmo kkkkkkk');
    } else {
        $('#senha-placeholder').text('Pode digitar 12345 se quiser!')
    }
});

$("#terms").change(function(e) {
    if ($(this).is(':checked')) {
        $('<div id="obg-aceite-termos" class="form-text">Obrigado por concordar com os termos!</div>')
            .insertAfter($('.form-check-label'));
    };
    if ($(this).is(':checked')==false && $('#obg-aceite-termos')) {
        $('#obg-aceite-termos').remove();
    };
});

$('#form').on('submit', function(event) {
    event.preventDefault();
    const name = $(this).find('[name=name]').val();
    $('#name-placeholder')[0].innerText = `Bem vindo(a) ${name}!`;
    alert('Obrigado por testar!\nOs dados usados nesse formulário não foram armazenados.')
});