function solve(input) {
    let fileInfo = input.split('\\').pop();
    let lastDotIdx = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.slice(0, lastDotIdx);
    let fileExtension = fileInfo.slice(lastDotIdx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')