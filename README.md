# 👁️ Show and Hide Password

A small interactive password field with a toggle button that switches between hidden and visible text. Built with **TypeScript**, plain HTML and CSS, with no frameworks or runtime dependencies.

## ✨ Features

- Toggle password visibility with a single click
- Icon changes with the state (👁️ = hidden, 🙈 = visible)
- Lightweight: one HTML file and one TypeScript file
- Null-safe DOM access, so the script won't crash if an element is missing
- Written in strict TypeScript

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| TypeScript | Toggle logic |

## 📁 Project Structure

```
show-and-hide-password/
├── src/
│   └── code.ts        # TypeScript source
├── dist/
│   ├── code.js        # Compiled JavaScript (loaded by the page)
│   ├── code.js.map
│   ├── code.d.ts
│   └── code.d.ts.map
├── code.html          # The page
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [VS Code](https://code.visualstudio.com/) with the **Live Server** extension (or any local web server)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/show-and-hide-password.git

# 2. Move into the project folder
cd show-and-hide-password

# 3. Install TypeScript
npm install --save-dev typescript
```

### Compile the TypeScript

```bash
npx tsc
```

To recompile automatically whenever you save:

```bash
npx tsc -w
```

### Run the project

Open `code.html` with **Live Server** (right-click the file → *Open with Live Server*).

> ⚠️ The script is loaded as an ES module (`type="module"`), so the page must be served over `http://`. Double-clicking the HTML file (`file:///...`) won't work.

## 🧠 How It Works

The script finds the password input and the toggle button, then flips the input's `type` between `password` and `text` on every click:

```ts
const inp = document.getElementById('password') as HTMLInputElement | null;
const btn = document.getElementById('toggleVisibility') as HTMLButtonElement | null;

if (inp && btn) {
    btn.addEventListener('click', () => {
        if (inp.type === 'password') {
            inp.type = 'text';
            btn.textContent = '🙈';
        } else {
            inp.type = 'password';
            btn.textContent = '👁️';
        }
    });
}
```

The HTML loads the compiled output:

```html
<script type="module" src="./dist/code.js"></script>
```

## 🐛 Troubleshooting

| Problem | Fix |
|---------|-----|
| Button does nothing | Run `npx tsc` and confirm `dist/code.js` exists |
| `code.js` returns 404 in the Network tab | Check that `src="./dist/code.js"` matches your folder layout |
| Nothing works when opening the file directly | Use Live Server instead of `file:///` |
| Old behavior after edits | Hard refresh with `Ctrl + Shift + R` |

## 🔮 Possible Improvements

- Update the button's `aria-label` when toggling (better screen-reader support)
- Add a password strength meter
- Add a matching "confirm password" field

## 👤 Author

**YOUR NAME**
GitHub: [@YOUR-USERNAME](https://github.com/YOUR-USERNAME)
