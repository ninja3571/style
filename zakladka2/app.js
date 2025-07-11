const colorInput = document.getElementById("colorChanger")

const root = document.documentElement;

colorInput.addEventListener('input', () => {
    const hex = colorInput.value; // e.g. "#ff0000"

    try {
        const color = chroma(hex);
        const hsl = color.hsl(); // returns [h, s, l]
        const h = Math.round(hsl[0]);
        const s = Math.round(hsl[1] * 100);
        const l = Math.round(hsl[2] * 100);

        // console.log(`HSL: hsl(${h}, ${s}%, ${l}%)`);
        root.style.setProperty('--base-color', `hsl(${h}, ${s}%, ${l}%)`);
    } catch (err) {
        console.log('Invalid color');
    }
})