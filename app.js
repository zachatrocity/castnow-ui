var os = require('os');
var gui = require('nw.gui');
var win = gui.Window.get();
var exec = require('child_process').exec;

// Create default menu items for OSX
if (process.platform === 'darwin') {
    var mb = new gui.Menu({ type: "menubar" });
    mb.createMacBuiltin(gui.App.manifest.productName);
    win.menu = mb;
}

//setup Vue
var App = new Vue({
	el: '#app',
    components: {
    	alert: VueStrap.alert,
    	sidebar: VueStrap.aside,
        vselect: VueStrap.select,
        bsinput: VueStrap.input
    },
    data: {
    	showMenu: false,
        options: [
          {val: '--tomp4', label: 'To MP4'},
          {val: '--quiet', label: 'Quiet'},
          {val: '--loop', label: 'Loop'}
        ],
        casturl: '',
        params: null
    },
    methods: {
        cast: function(e){
            e.preventDefault();
            var command = 'castnow ' + this.casturl;

            this.params.forEach(function(param){
                command += (' ' + param);
            })

            console.log(command);
            

            exec(command, function(error, stdout, stderr) {
               console.log(stdout);
            });
        }
    }
});

