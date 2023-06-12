let n1 = 0;
let n2 = 0;
let operation = '';
let operationCompleted = false;
const $results = $('#results');

function setOperation(op) {
    operation = op;
    n1 = parseFloat($results.text());
    $results.html('');
    operationCompleted = false;
}

function handleOperations() {
    switch (operation) {
        case "+":
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '/':
            if (n2 === 0) return 0;
            return n1 / n2;
        case '*':
            return n1 * n2;
    }
}

$('.btn').click((e) => {
    let id = e.target.innerText;
    if (id === '+') {
        setOperation('+');
        return;
    }
    if (id === '-') {
        setOperation('-');
        return;
    }
    if (id === '/') {
        setOperation('/');
        return;
    }
    if (id === '*') {
        setOperation('*');
        return;
    }
    if (id === '=') {
        $('#results').html(handleOperations());
        n1 = n2 = 0;
        operationCompleted = true;
        return;
    }
    if (id === 'C') {
        $('#results').html('');
        n1 = n2 = 0;
        operationCompleted = true;
        return;
    }
    if (operationCompleted) {
        $results.html('');
        $results.append(id);
        operationCompleted = false;
    } else {
        $results.append(id);
        n2 = parseFloat($results.text());
    }
});
