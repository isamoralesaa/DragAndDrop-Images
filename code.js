/**
 * Ejemplo para Arrastrar y Soltar images
 */

const content         = document.querySelector('.content');
const contentImg      = document.querySelector('.images');
const FileContentType = ["image/jpeg", "image/jpg", "image/png"]; //Extenciones de imagen validas

const viewImages = files => {
    [...files].forEach((file) => {
        if (!FileContentType.includes(file.type)){//verificar el tipo de archivo
            alert('Error Archivo con formato no valido');
            return;
        }

        let read = new FileReader();

        read.onload = () => {
            let img = document.createElement('img');
            img.src = read.result;
            img.setAttribute("width", "150px");
            contentImg.appendChild(img);
        }

        read.readAsDataURL(file);
    })
}

content.addEventListener('dragover', e => {
    e.preventDefault();
    content.classList.add('active');
});

content.addEventListener('dragleave', e=>{
    e.preventDefault();
    content.classList.remove('active');
});

content.addEventListener('drop', e => {
    e.preventDefault();
    content.classList.remove('active');
    viewImages(e.dataTransfer.files);
});