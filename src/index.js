import Vue from 'vue';
import App from './App';

new Vue({
    el: '#app',
    components: { App },
    template: `<App :state="state"/>`,
    data: {
        state: {
            showDone: false,
            todos: [{
                text: 'Learn to use Vue with database',
                done: true
            },
            {
                text: 'Learn React',
                done: false
            },
            {
                text: 'Complete this course',
                done: false
            }]
        }
    }
});