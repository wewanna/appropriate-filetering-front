const remote = require('electron').remote;
const ipcRenderer = require('electron').ipcRenderer;

document.getElementById("close").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
}); 

ipcRenderer.on('result',(event, args)=>{
    alert(args);
});
