/**
 * Created by lirui on 2017/5/21.
 */

new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue.js'
    },
    methods: {
        greet: function () {
            alert(this.message)
        },
        say: function (msg) {
            alert(msg)
        }
    }
});