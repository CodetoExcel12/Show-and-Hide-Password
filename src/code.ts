// Typescript logic for the password
console.log('code.ts loaded')
const inp = document.getElementById('password') as HTMLInputElement | null
const btn = document.getElementById('toggleVisibility') as HTMLButtonElement | null

if(inp && btn) {
    btn.addEventListener('click', () => {
        if(inp.type === 'password'){
            inp.type = 'text';
            btn.textContent = '🙈'
            btn.setAttribute('aria-label', 'Hide Password')
        }
        else{
            inp.type = 'password'
            btn.textContent = '👁️'
            btn.setAttribute('aria-label', 'Show Password')
        }
    })
}

export {}
