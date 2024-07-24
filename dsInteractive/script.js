let array = [];

const arraySection = document.querySelector('#array')
const modal = document.querySelector('#modal');
const arrayOutput = arraySection.querySelector('.output')
const arrayControls = arraySection.querySelectorAll('.controls button')
const form = modal.querySelector('form')
const input = modal.querySelector('#input')

function printArray() {
    if(array.length === 0) {
        arrayOutput.innerHTML = 'Empty'
    } else {
        arrayOutput.innerHTML = ''
        array.forEach(function (item, index) {
            arrayOutput.innerHTML += `<span class="array-item">` + array[index] +`</span>`
        })
    }

}

function handleSubmit(e) {
    e.preventDefault()
    switch(modal.dataset.last) {
        case 'add':
            if(input.value != '') {
                array.push(input.value)
                input.value = ''
                printArray()
            }
            break;
        
        case 'remove':
            if(array.indexOf(input.value) != -1) {
                array = array.filter(x => input.value != x)
                printArray()
            } else {
                alert('The value you want to delete does not exists!')
            }
            break;

        case 'search':
            if(array.indexOf(input.value) === -1) {
                alert('Element does not exists!')
            } else {
                alert('Element exists!')
            }
            break;
    }

    modal.classList.add('hidden')
}
function arrayAdd() {
    modal.classList.remove('hidden')
    modal.dataset.last = 'add'
}

function arrayRemove() {
    modal.classList.remove('hidden')
    modal.dataset.last = 'remove'
}

function arraySearch() {
    modal.classList.remove('hidden')
    modal.dataset.last = 'search'
}

function arraySort() {
    array.sort((a, b) => a - b)
    printArray()
}


function handleArrayControls(control) {
    control.addEventListener('click', function() {
        switch(control.dataset.type) {
            case 'add': arrayAdd(); break;
            case 'remove': arrayRemove(); break;
            case 'search': arraySearch(); break;
            case 'sort': arraySort(); break;   
        }
    })
}

form.addEventListener('submit', handleSubmit)

arrayControls.forEach(handleArrayControls)
printArray()
