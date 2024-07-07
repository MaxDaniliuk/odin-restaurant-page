export default function loadIcon(container, svgImg) {
    const aTag = document.createElement('a');
    aTag.href = "#";
    aTag.innerHTML = svgImg;
    container.appendChild(aTag);
}