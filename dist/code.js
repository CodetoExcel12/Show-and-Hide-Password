"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
// Typescript logic for the password
console.log('code.ts loaded');
const inp = document.getElementById('password');
const btn = document.getElementById('toggleVisibility');
if (inp && btn) {
    btn.addEventListener('click', () => {
        if (inp.type === 'password') {
            inp.type = 'text';
            btn.textContent = '🙈';
        }
        else {
            inp.type = 'password';
            btn.textContent = '👁️';
        }
    });
}
//# sourceMappingURL=code.js.map